import { Component } from '@angular/core';
import { HttpsService } from 'src/app/services/https.service';
import { IResponseProduct } from 'src/app/models/views/waiter.interface';
import { Router, } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { ServiceAddToCarService } from 'src/app/services/service-add-to-car.service';



@Component({
  selector: 'app-gestion-products',
  templateUrl: './gestion-products.component.html',
  styleUrls: ['./gestion-products.component.css']
})
export class GestionProductsComponent {


  public dataProducts: IResponseProduct[] = []


  constructor(
    private HttpsService: HttpsService,
    private router: Router,
    private toastr: ToastrService,
    private ServiceAdd: ServiceAddToCarService,
  ) { }



  //Metodo que me permite traer todo los productos en lista//  
  public toProducts(type: void): void {
    this.HttpsService.get('products')
      .subscribe({  // Nos subscribimos al observable
        next: (data: IResponseProduct[]) => { // codigo correcto
          this.dataProducts = data
        },
        error: (err: object) => {
          console.log('error', err) // gestion de errores
        },
        complete: () => console.log('complete')  // codigo que se ejecuta al finalizar la subscripción
      })
  }

  public sendProduct(data: IResponseProduct): void {
    setTimeout(() => {
      this.ServiceAdd.activatorAddToCart.emit(data)
    },1)
  }
  //se crea alerta para confirmar la eliminacion del producto, deberia suscribirse y eliminar el producto en la data//
  ShowSuccess() {
    this.toastr.success('Puedes crear un nuevo producto en el boton: NUEVO PRODUCTO', 'Se elimino el producto con exito!', {
      easing: 'ease-in',
      easeTime: 1000
    })
  }

  // recrea en la etiqueta//
  nuevoProducto() {
    this.router.navigate(['/nav/admin/new'])
  }


  ngOnInit(): void {
    this.toProducts()
  }

}


