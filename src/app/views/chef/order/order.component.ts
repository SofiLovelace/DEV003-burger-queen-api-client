import { Component } from '@angular/core';
import { IResponseOrder } from 'src/app/models/views/chef.interface';
import { HttpsService } from 'src/app/services/https.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {

  public dataOrders: IResponseOrder[] = [] // generamos un array que modidifcaremos con la data que recibamos del servidor

  constructor (
    private HttpsService: HttpsService
  ) {}

  private getOrders (): void {
    this.HttpsService.get('orders')
    .subscribe({
      next: (response: IResponseOrder[]) => {
        this.dataOrders = response.sort((a,b) => a.dataEntry - b.dataEntry)
      }
    })
  }

  ngOnInit():void {
    this.getOrders()
  }
}
