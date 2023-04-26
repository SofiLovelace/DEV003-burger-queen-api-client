import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { CartComponent } from '../cart.component';
import {
  IProductToCar,
  IDataCheck,
} from 'src/app/models/views/waiter.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  public productsCheck: IProductToCar[] = [];
  public total: number = 0;

  constructor(
    private cartComponent: CartComponent,
    public switchS: SwitchService
  ) {}

  public closeModal(): void {
    this.switchS.$switchModal.emit(false);
  }

  public confirmOrder(): void {
    this.cartComponent.sendOrder();
    this.closeModal();
  }

  ngOnInit(): void {
    this.switchS.$dataOrder.subscribe((res: IDataCheck) => {
      this.productsCheck = this.productsCheck.concat(res.products);
      this.total = this.total + res.total;
    });
  }
}
