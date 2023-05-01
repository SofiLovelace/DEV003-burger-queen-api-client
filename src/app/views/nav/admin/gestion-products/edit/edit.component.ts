import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoI } from 'src/app/models/views/product.interface';
import { IResponseProduct } from 'src/app/models/views/waiter.interface';
import { HttpsService } from 'src/app/services/https.service';
//import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  //editarForm: FormGroup;

  constructor (
    private activatedrouter:ActivatedRoute , private router:Router,
    private HttpsService: HttpsService,
    ) { 

     // formularios para validar informacion
      //this.editarForm = this.group({
      //  name: ['', [Validators.required]],
      //  type: ['type', [Validators.required]],
      //  price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      //  image: ['', [Validators.required]]
      //});
    }
    public dataProduct: ProductoI[] = []


    
  ngOnInit():void{
  let productid = this.activatedrouter.snapshot.paramMap.get('id');
   let token = this.getToken();
   console.log(productid) 
  // this.HttpsService.get('orders').subscribe({  // Nos subscribimos al observable
  //  next: (data: IResponseProduct[])=> { // codigo correcto
  
  //    },
  //  error: (err: object) => {
  //    console.log('error',err) // gestion de errores
  //    },
  //  complete:()=> console.log('complete')  // codigo que se ejecuta al finalizar la subscripción
  //})    
}
   
   

  

  getToken(){
    return sessionStorage.getItem('userToken')
  }

 

}
