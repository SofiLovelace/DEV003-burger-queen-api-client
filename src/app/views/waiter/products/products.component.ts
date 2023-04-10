import { Component } from '@angular/core';
import { HttpsService } from 'src/app/services/https-waiter.service';
import { IResponseProduct, IProductToCar } from 'src/app/models/views/waiter.interface';
import { ServiceAddToCarService } from 'src/app/services/service-add-to-car.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent{
  
  public dataProducts: IResponseProduct[] = [] // generamos un array que modificaremos, en función de esto se generaran los elementos html
  
  constructor (
    private HttpsService: HttpsService,
    private ServiceAdd: ServiceAddToCarService
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

  public addProduct(paragm:IResponseProduct){
    const toCart:IProductToCar = {
      dateEntry: paragm.dateEntry,
      id: paragm.id,
      image: paragm.image,
      name: paragm.name,
      price: paragm.price,
      type: paragm.type,
      totalQuantity: 1
    }
    console.log('delivering data =====>', toCart)
    this.ServiceAdd.activatorAddToCart.emit(toCart)
  }

  ngOnInit():void {
    this.filterProducts()  
  }

  
  
}