import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoI } from 'src/app/models/views/product.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public prodructid: ProductoI[] = [];

  constructor (
    private activerouter:ActivatedRoute , private router:Router,
    private api: ApiService
    ) { }



    
  //ngOnInit():void{
  // let productid = this.activerouter.snapshot.paramMap.get('id');
  // let token = this.getToken();
  //this.api.getSingleProduct(productid).subscribe( data  =>{ 
  //  console.log(data) 
  //})

  //}

  getToken(){
    return sessionStorage.getItem('userToken')
  }

}
