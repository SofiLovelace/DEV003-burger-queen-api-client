import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HttpsService } from 'src/app/services/https.service';
import {
  IResponseProduct,
  IProductToCar,
} from 'src/app/models/views/waiter.interface';
import { IResponseOrder } from 'src/app/models/views/chef.interface';
import { ServiceAddToCarService } from 'src/app/services/service-add-to-car.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @ViewChild('btnLunch') btnLunch!: ElementRef;
  @ViewChild('btnBreakfast') btnBreakfast!: ElementRef;

  public dataProducts: IResponseProduct[] = []; // generamos un array que modificaremos, en función de esto se generaran los elementos html
  public numberOrders: number = 0;
  public iconOrderColor: string = 'gray';

  constructor(
    private HttpsService: HttpsService,
    private ServiceAdd: ServiceAddToCarService,
    private renderer2: Renderer2
  ) {}

  public filterProducts(type: 'Desayuno' | 'Almuerzo' | void): void {
    this.HttpsService.get('products').subscribe({
      // Nos subscribimos al observable
      next: (data: IResponseProduct[]) => {
        // codigo correcto
        !type
          ? (this.dataProducts = data)
          : type === 'Desayuno'
          ? (this.dataProducts = data.filter(
              (product: IResponseProduct) => product.type === 'Desayuno'
            ))
          : (this.dataProducts = data.filter(
              (product: IResponseProduct) => product.type === 'Almuerzo'
            ));
      },
      error: (err: object) => {
        console.log('error', err); // gestion de errores
      },
      complete: () => console.log('complete'), // codigo que se ejecuta al finalizar la subscripción
    });
  }

  public addProduct(productData: IResponseProduct) {
    const toCart: IProductToCar = {
      qty: 1,
      product: {
        id: productData.id,
        name: productData.name,
        price: productData.price,
        image: productData.image,
        type: productData.type,
        dateEntry: productData.dateEntry,
      },
    };
    this.ServiceAdd.activatorAddToCart.emit(toCart);
  }

  public setNumberOrdersReady(): void {
    this.HttpsService.get('orders').subscribe({
      next: (data: IResponseOrder[]) => {
        let numberOrders = data.filter(
          (order: IResponseOrder) => order.status === 'delivering'
        ).length;
        this.numberOrders = numberOrders;
        numberOrders > 0
          ? (this.iconOrderColor = 'black')
          : (this.iconOrderColor = 'gray');
      },
      error: (err: object) => {
        console.log('error', err); // gestion de errores
      },
      complete: () => console.log('complete'), // codigo que se ejecuta al finalizar la subscripción
    });
  }

  public changeColor(button: string) {
    const btnLunch = this.btnLunch.nativeElement;
    const btnBreakfast = this.btnBreakfast.nativeElement;

    if (button === 'lunch') {
      this.renderer2.setStyle(btnLunch, 'backgroundColor', 'black');
      this.renderer2.setStyle(btnBreakfast, 'backgroundColor', 'gray');
    } else {
      this.renderer2.setStyle(btnLunch, 'backgroundColor', 'gray');
      this.renderer2.setStyle(btnBreakfast, 'backgroundColor', 'black');
    }
  }

  ngOnInit(): void {
    this.filterProducts();
    this.setNumberOrdersReady();
    setInterval(() => {
      this.setNumberOrdersReady();
    }, 5000);
  }
}
