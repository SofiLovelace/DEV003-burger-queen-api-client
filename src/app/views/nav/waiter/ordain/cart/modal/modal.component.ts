import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { CartComponent } from '../cart.component';
import {
  IProductToCar,
  IDataCheck,
} from 'src/app/models/views/waiter.interface';
import { ToastrService } from 'ngx-toastr';

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
    public switchS: SwitchService,
    private toastr: ToastrService
  ) {}

  public closeModal(): void {
    this.switchS.$switchModal.emit(false);
  }

  ShowSuccess() {
    this.toastr.success(
      '',
      'Orden enviada a cocina',
      {
        easing: 'ease-in',
        easeTime: 1000,
      }
    );
  }

  public confirmOrder(): void {
    this.cartComponent.sendOrder();
    this.closeModal();
    this.ShowSuccess()
  }

  ngOnInit(): void {
    this.switchS.$dataOrder.subscribe((res: IDataCheck) => {
      this.productsCheck = this.productsCheck.concat(res.products);
      this.total = this.total + res.total;
    });
  }
}
