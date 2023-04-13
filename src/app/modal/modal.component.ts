import { Component } from '@angular/core';
import { SwitchService } from '../services/switch.service';
import { CartComponent } from '../views/waiter/cart/cart.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent {

  constructor ( 
    private cartComponent : CartComponent,
    private switchS: SwitchService
    ) { }

  public closeModal ():void {
    this.switchS.$switchModal.emit(false)
  }

  public confirmOrder ():void {
    this.cartComponent.sendOrder()
    this.closeModal()
  }

}

