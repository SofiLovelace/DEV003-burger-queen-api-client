import { Component } from '@angular/core';
import { HttpsService } from 'src/app/services/https.service';
import { IResponseProduct } from 'src/app/models/views/waiter.interface';

@Component({
  selector: 'app-gestion-products',
  templateUrl: './gestion-products.component.html',
  styleUrls: ['./gestion-products.component.css']
})
export class GestionProductsComponent {
 
  
  public dataProducts: IResponseProduct[] = [] // generamos un array que modificaremos, en función de esto se generaran los elementos html
  
  constructor (
    private HttpsService: HttpsService,
    ) { }

 
    
  public toProducts(type: 'Desayuno' | 'Almuerzo' | void): void {
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
  //public addProduct(productData:IResponseProduct){
  //  const toCart:IProductToCar = {
  //    qty: 1,
  //    product: {
  //    id: productData.id,
  //    name: productData.name,
  //    price: productData.price,
  //    image: productData.image,
  //    type: productData.type,
  //    dateEntry: productData.dateEntry,
  //    }
  //  }
  //  this.ServiceAdd.activatorAddToCart.emit(toCart)
  //}

  ngOnInit():void {
      this.toProducts() 
  }

}


