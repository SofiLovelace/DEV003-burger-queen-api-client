import { Component } from '@angular/core';
import { ServiceAddToCarService } from 'src/app/services/service-add-to-car.service';
import { IProductToCar } from 'src/app/models/views/waiter.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpsAddOrderService } from 'src/app/services/https-add-order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  public productsCart: IProductToCar[] = []
  public total:number = 0

  /** Declaramos un objeto en forma de formGroup **/
  client = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.minLength(2)]), // establecemos valor por defecto y reglas de validacion para cada campo
  })

  /**Definimos geters **/
  get email(){
    return this.client.get('name') as FormControl
  }

  private addToCart (newElement:IProductToCar):boolean {
    let add:boolean = true
    this.productsCart.forEach(element => { //validamos si ya existe el elemento
      if(element.id === newElement.id){
        element.totalQuantity ++
        add = false
      }
    })
    return add
  }

  public deleteProduct():void {
    this.productsCart = this.productsCart.filter((product) => product.totalQuantity > 0 )
  }

  public sumTotal():void {
    this.productsCart.length === 0
    ? this.total = 0
    : this.productsCart.length === 1
      ? this.total = this.productsCart[0].totalQuantity * this.productsCart[0].price
      : this.total = this.productsCart.reduce((accumulator, currentValue):any => accumulator + currentValue.price * currentValue.totalQuantity, 0)
  }
  
  public sendOrder () {
    this.HttpsAddOrder.postOrder(this.productsCart)
    .subscribe({  // Nos subscribimos al observable
      next: (data: any)=> { // codigo correcto
        console.log(data)
      },
      error: (err: any)=> {
        console.log('error',err) // gestion de errores
      },
      complete:()=> {
        console.log('complete') // codigo correcto
      }
    })
  }
  
  constructor (
    private ServiceAdd: ServiceAddToCarService,
    private HttpsAddOrder: HttpsAddOrderService
    ) {}

  ngOnInit():void {
    this.ServiceAdd.activatorAddToCart
      .subscribe(data => {
        if (this.addToCart(data)) { //si es true podemos hacer push
          this.productsCart.push(data)
        }
        this.sumTotal()
      })
  }
}
