import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { IResponseOrder } from 'src/app/models/views/chef.interface';
import { OrderComponent } from '../order.component';

@Component({
  selector: 'app-modal-chef',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponentChef {
  public dataOrder:IResponseOrder | any

  constructor (
    private switchS: SwitchService,
    private orderComponent: OrderComponent
  ) {}

  public closeModal ():void {
    this.switchS.$switchModal.emit(false)
  } 

  public confirmOrder (id:number):void {
    this.orderComponent.completeOrder(id)
    this.closeModal()
  }

  ngOnInit():void {
    this.switchS.$dataOrder
    .subscribe((res:IResponseOrder) => {
      this.dataOrder = res
    })
  }
}
