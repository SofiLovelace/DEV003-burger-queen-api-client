import { Component } from '@angular/core';
import { HttpsService } from 'src/app/services/https.service';
import { IResponseProduct } from 'src/app/models/views/waiter.interface';
import { Router, ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import { ProductoI } from 'src/app/models/views/product.interface';


@Component({
  selector: 'app-gestion-products',
  templateUrl: './gestion-products.component.html',
  styleUrls: ['./gestion-products.component.css']
})
export class GestionProductsComponent {
 
  
  public dataProducts: IResponseProduct[] = []
  public dataProduct: ProductoI[] = []

  
  constructor (
    private HttpsService: HttpsService, private router:Router,
    private toastr:ToastrService,
    private activatedrouter:ActivatedRoute 
    ) { }

    

  //Metodo que me permite traer todo los productos en lista//  
  public toProducts(type:void): void {
    this.HttpsService.get('products')
    .subscribe({  // Nos subscribimos al observable
      next: (data: IResponseProduct[])=> { // codigo correcto
        this.dataProducts = data 
        },
      error: (err: object) => {
        console.log('error',err) // gestion de errores
        },
      complete:()=> console.log('complete')  // codigo que se ejecuta al finalizar la subscripción
    })    
  }


  ngOnInit():void {
      this.toProducts() 
  }

  //se crea alerta para confirmar la eliminacion del producto, deberia suscribirse y eliminar el producto en la data//
  ShowSuccess(){
    this.toastr.success('Puedes crear un nuevo producto en el boton: NUEVO PRODUCTO','Se elimino el producto con exito!',{
      easing:'ease-in',
      easeTime: 1000
    })
    let productid = this.activatedrouter.snapshot.paramMap.get('id');
 this.HttpsService.get('product').subscribe({
   next: (data: ProductoI[])=> { 
  console.log(data)
      },
    error: (err: object) => {
      console.log('error',err) 
      },
    complete:()=> console.log('complete')  
  }) 

  }

  editarProducto(id:any){
    this.router.navigate(['/nav/admin/edit' , id])
  }
 
  nuevoProducto(){
    this.router.navigate(['/nav/admin/new'])
  }

}


