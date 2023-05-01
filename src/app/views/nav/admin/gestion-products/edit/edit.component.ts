import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoI } from 'src/app/models/views/product.interface';
import { HttpsService } from 'src/app/services/https.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor (
    private activerouter:ActivatedRoute , private router:Router,
    private HttpsService: HttpsService
    ) { }

    public datosProducto: ProductoI[] = [] 

    editarFor = new FormGroup([
    //  nombre = new FormControl(''),
    //  precio = new FormControl(''),
    //  imagen = new FormControl(''),
    //  tipo = new FormControl(''),
      
    ]);
 



    
  ngOnInit():void{
   let productid = this.activerouter.snapshot.paramMap.get('id');
   let token = this.getToken();
   this.HttpsService.getOne(productid).suscribe((data: any) =>{  console.log(data)})
   }
   
   
   

  

  getToken(){
    return sessionStorage.getItem('userToken')
  }

}
