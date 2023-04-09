import { Component } from '@angular/core';
import { HttpsService } from 'src/app/services/https-waiter.service';
import { IResponseProduct } from 'src/app/models/views/waiter.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent{
  
  public dataProducts: IResponseProduct[] = [] // generamos un array que modificaremos, en función de esto se generaran los elementos html
  
  constructor (private HttpsService: HttpsService) { }

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

  public getProduct(paragm:IResponseProduct){
    console.log({
      id: paragm.id,
      name: paragm.name,
      price: paragm.price,
      totalQuantity: 1
    })
  }

  ngOnInit():void {
    this.filterProducts()  
  }

  
  
}