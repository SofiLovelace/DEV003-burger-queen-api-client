import { Component } from '@angular/core';
import { IResponseOrder } from 'src/app/models/views/chef.interface';
import { HttpsService } from 'src/app/services/https.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {

  public dataOrders: IResponseOrder[] = [] // generamos un array que modidifcaremos con la data que recibamos del servidor

  public modalSwitch: boolean = false

  constructor (
    private HttpsService: HttpsService,
    public switchS: SwitchService
  ) {}

  private getOrders (): void {
    this.HttpsService.get('orders')
    .subscribe({
      next: (response: IResponseOrder[]) => {
        this.dataOrders = response.filter((order: IResponseOrder) => order.status === 'pending').sort((a,b) => a.dataEntry - b.dataEntry)
      }
      ,
      error: (err: any)=> {
        console.log('error',err) // gestion de errores
      },
      complete:()=> {
        console.log('complete') // codigo correcto
      }
    })
  }

  public finishOrder(data: any):void {
    setTimeout(() => {
      this.switchS.$dataOrder.emit(data)
    }, 1)
  }

  public openModal(data: any) {
    this.modalSwitch = true
    this.finishOrder(data)
  }

  public completeOrder (id:number) { // funcion que marca el pedido como ccompletado
    const bodyHttp = {
      dataFinish: new Date(),
      status: 'complete'
    }
    this.HttpsService.patch('orders' + '/' + id, bodyHttp)
    .subscribe({
      next: (response: any) => {
        console.log('respuesta', response)
      }
      ,
      error: (err: any)=> {
        console.log('error',err) // gestion de errores
      },
      complete:()=> {
        this.getOrders()
        console.log('complete') // codigo correcto
      }
    })
  }

  ngOnInit():void {
    this.getOrders()
    this.switchS.$switchModal.subscribe((res) => this.modalSwitch = res)
  }
}
