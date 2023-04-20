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
  public orderFilter: IResponseOrder[] = []

  public modalSwitch: boolean = false

  constructor (
    private HttpsService: HttpsService,
    public switchS: SwitchService
  ) {}
  
  public filterOrder(status: 'complete' | 'pending') {
    this.orderFilter = this.dataOrders.filter(order => order.status === status)
  }

  private getOrders (): void {
    this.HttpsService.get('orders')
    .subscribe({
      next: (response: IResponseOrder[]) => {
        this.dataOrders = response.sort((a,b) => a.dataEntry - b.dataEntry)
        this.filterOrder('pending')
      },
      error: (err: any)=> {
        console.log('error',err) // gestion de errores
      },
      complete:()=> {
        console.log('complete') // codigo correcto
      }
    })
  }

  public finishOrder(data: any):void {
    const dataFinish = {
      id: data.id,
      userId: data.userId,
      client: data.client,
      products: data.products,
      status: data.status,
      dataEntry: data.dataEntry,
  }

    setTimeout(() => {
      this.switchS.$dataOrder.emit(dataFinish)
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
