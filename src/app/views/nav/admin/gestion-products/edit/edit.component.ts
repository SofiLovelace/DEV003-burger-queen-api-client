import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IResponseProduct } from 'src/app/models/views/waiter.interface';
import { HttpsService } from 'src/app/services/https.service';
import { ServiceAddToCarService } from 'src/app/services/service-add-to-car.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor (
    private router:Router,
    private HttpsService: HttpsService,
    private ServiceAdd: ServiceAddToCarService,
    ) { }

  public dataProducts:any | IResponseProduct 

  get name(){
    return this.productForm.get('name') as FormControl;
  }

  get image(){
    return this.productForm.get('image') as FormControl;
  }

  get type(){
    return this.productForm.get('type') as FormControl;
  }

  get price(){
    return this.productForm.get('price') as FormControl;
  }


  productForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    //solicitar el required para url
    image : new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  })

 
 


getProduct(){
  this.ServiceAdd.activatorAddToCart.subscribe({
    next: (data: IResponseProduct) => {
    this.dataProducts = data;
  },
    error:(err:object) => {
      console.log('error', err)
    },
    complete:() => console.log('complete')
  })
}

    
  
  
  getToken(){
    return sessionStorage.getItem('userToken')
  }


  ngOnInit():void{
    this.getProduct()
      
  }  

}
