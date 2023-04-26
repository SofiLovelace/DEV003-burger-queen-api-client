import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { IResponseOrder } from 'src/app/models/views/chef.interface';
import { OrdersReadyComponent } from '../orders-ready.component';

@Component({
  selector: 'app-modal-delivering',
  templateUrl: './modal-delivering.component.html',
  styleUrls: ['./modal-delivering.component.css'],
})
export class ModalDeliveringComponent {
  public dataOrder: IResponseOrder | any;

  constructor(
    private switchS: SwitchService,
    private ordersReady: OrdersReadyComponent
  ) {}

  public closeModal(): void {
    this.switchS.$switchModal.emit(false);
  }

  public confirmOrder(id: number): void {
    this.ordersReady.completeOrder(id);
    this.closeModal();
  }

  ngOnInit(): void {
    this.switchS.$dataOrder.subscribe((res: IResponseOrder) => {
      this.dataOrder = res;
    });
  }
}
