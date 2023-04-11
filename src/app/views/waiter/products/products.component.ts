import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HttpsService } from 'src/app/services/https-waiter.service';
import { IResponseProduct, IProductToCar } from 'src/app/models/views/waiter.interface';
import { ServiceAddToCarService } from 'src/app/services/service-add-to-car.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent{

  @ViewChild('btnLunch')btnLunch!:ElementRef;
  @ViewChild('btnBreakfast')btnBreakfast!:ElementRef;
  
  public dataProducts: IResponseProduct[] = [] // generamos un array que modificaremos, en función de esto se generaran los elementos html
  
  constructor (
    private HttpsService: HttpsService,
    private ServiceAdd: ServiceAddToCarService,
    private renderer2: Renderer2
    ) { }

  public filterProducts(type: 'Desayuno' | 'Almuerzo' | void): void {
    this.HttpsService.get('products')
    .subscribe({  // Nos subscribimos al observable
      next: (data: IResponseProduct[])=> { // codigo correcto
        !type
        ?this.dataProducts = data
        :type === 'Desayuno'
        ?this.dataProducts = data.filter((product: IResponseProduct)=> product.type === 'Desayuno')
          :this.dataProducts = data.filter((product: IResponseProduct)=> product.type === 'Almuerzo')
        },
      error: (err: object) => {
        console.log('error',err) // gestion de errores
        },
      complete:()=> console.log('complete')  // codigo que se ejecuta al finalizar la subscripción
    })    
  }

  public addProduct(productData:IResponseProduct){
    const toCart:IProductToCar = {
      dateEntry: productData.dateEntry,
      id: productData.id,
      image: productData.image,
      name: productData.name,
      price: productData.price,
      type: productData.type,
      totalQuantity: 1
    }
    console.log('delivering data =====>', toCart)
    this.ServiceAdd.activatorAddToCart.emit(toCart)
  }

  public changeColor(button: string) {
    const btnLunch= this.btnLunch.nativeElement;
    const btnBreakfast= this.btnBreakfast.nativeElement;

    if (button === "lunch") {
      this.renderer2.setStyle(btnLunch, 'backgroundColor', 'black');
      this.renderer2.setStyle(btnBreakfast, 'backgroundColor', 'gray');      
    } else {
      this.renderer2.setStyle(btnLunch, 'backgroundColor', 'gray');
      this.renderer2.setStyle(btnBreakfast, 'backgroundColor', 'black');      
    }
  }

  ngOnInit():void {
    this.filterProducts()  
  }
}