import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { IResponseOrder } from 'src/app/models/views/chef.interface';
import { OrdersReadyComponent } from '../orders-ready.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-modal-delivering',
  templateUrl: './modal-delivering.component.html',
  styleUrls: ['./modal-delivering.component.css'],
})
export class ModalDeliveringComponent {
  public dataOrder: IResponseOrder | any;

  constructor(
    private switchS: SwitchService,
    private ordersReady: OrdersReadyComponent,
    private toastr: ToastrService
  ) {}

  public closeModal(): void {
    this.switchS.$switchModal.emit(false);
  }

  ShowSuccess() {
    this.toastr.success(
      '',
      'Orden entregada!',
      {
        easing: 'ease-in',
        easeTime: 1000,
      }
    );
  }


  public confirmOrder(id: number): void {
    this.ordersReady.completeOrder(id);
    this.closeModal();
    this.ShowSuccess()
  }

  ngOnInit(): void {
    this.switchS.$dataOrder.subscribe((res: IResponseOrder) => {
      this.dataOrder = res;
    });
  }
}
