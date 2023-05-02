import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IResponseProduct } from 'src/app/models/views/waiter.interface';
import { HttpsService } from 'src/app/services/https.service';
import { ServiceAddToCarService } from 'src/app/services/service-add-to-car.service';
import { ToastrService } from 'ngx-toastr'




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(
    private router: Router,
    private HttpsService: HttpsService,
    private ServiceAdd: ServiceAddToCarService,
    private toastr: ToastrService,
  ) { }

  public dataProducts: any | IResponseProduct

  get name() {
    return this.productForm.get('name') as FormControl;
  }

  get image() {
    return this.productForm.get('image') as FormControl;
  }

  get type() {
    return this.productForm.get('type') as FormControl;
  }

  get price() {
    return this.productForm.get('price') as FormControl;
  }


  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    //solicitar el required para url
    image: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  })


  getProduct() {
    this.ServiceAdd.activatorAddToCart.subscribe({
      next: (data: IResponseProduct) => {
        this.dataProducts = data;
        this.productForm.setValue({
          'name': this.dataProducts.name,
          'image': this.dataProducts.image,
          'type': this.dataProducts.type,
          'price': this.dataProducts.price
        }
        )
      },
      error: (err: object) => {
        console.log('error', err)
      },
      complete: () => console.log('complete')
    })
  }


  ShowProductSuccess() {
    this.toastr.success('Producto editado con exito', '', {
      easing: 'ease-in',
      easeTime: 1000
    })
  }

  editProduct() {
    const id = this.dataProducts.id
    const data = this.productForm.value
    const productEdit = {
      name: data.name,
      image: data.image,
      type: data.type,
      price: data.price,
      dateEntry: new Date()

    }
    this.HttpsService.patch(`products/${id}`, productEdit).subscribe({
      next: (response: any) => {
        console.log('respuesta', response);
      },
      error: (err: any) => {
        console.log('error', err);
      },
      complete: () => {
        this.ShowProductSuccess()
        setTimeout(() => {
          this.router.navigate(['/nav/admin/products'])
        }, 1000);
        console.log('complete')
      }
    })
  }


  
  getToken() {
    return sessionStorage.getItem('userToken')
  }


  ngOnInit(): void {
    this.getProduct()

  }

}