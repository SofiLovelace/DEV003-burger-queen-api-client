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
  
  public filterOrder(status: 'delivering' | 'pending') {
    this.orderFilter = this.dataOrders.filter(order => order.status === status)
  }

  private getOrders (): void {
    this.HttpsService.get('orders')
    .subscribe({
      next: (response: IResponseOrder[]) => {
        this.dataOrders = response.sort((a,b) => new Date (a.dateEntry).getTime() - new Date (b.dateEntry).getTime())
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

  public finishOrder(data: IResponseOrder):void {
    const dataFinish = {
      id: data.id,
      userId: data.userId,
      client: data.client,
      products: data.products,
      status: data.status,
      dateEntry: data.dateEntry,
    }

    setTimeout(() => {
      this.switchS.$dataOrder.emit(dataFinish)
    }, 1)
  }

  public openModal(data: IResponseOrder) {
    this.modalSwitch = true
    this.finishOrder(data)
  }

  public completeOrder (id:number) { // funcion que marca el pedido como ccompletado
    const bodyHttp = {
      dateProcessed: new Date(),
      status: 'delivering'
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

  public kitchenTimer (dataOrder: IResponseOrder) {
    let timeGralSeconds = (new Date (dataOrder.dateProcessed).getTime() - new Date (dataOrder.dateEntry).getTime()) / 1000
    
    let timerInSeconds = parseInt(timeGralSeconds.toString()).toString()
    let seconds = timerInSeconds.substring(timerInSeconds.length-2, timerInSeconds.length)
    if (seconds.length !== 1 ){
      if(Number(seconds) >= 60){
        seconds = (Number(seconds) - 60).toString()
      }
    }
    
    let timerInMinutes = parseInt((timeGralSeconds / 60).toString()).toString()
    let minutes = timerInMinutes.substring(timerInMinutes.length-2, timerInMinutes.length)
    if (minutes.length !== 1) {
      if (Number(minutes) >= 60){
        minutes = (Number(minutes) - 60).toString()
      }
    } 

    let hours = parseInt(((timeGralSeconds / 60) /60).toString()).toString()
    return `${hours}:${minutes}:${seconds}`
  }

  ngOnInit():void {
    this.getOrders()
    this.switchS.$switchModal.subscribe((res) => this.modalSwitch = res)
  }
}
