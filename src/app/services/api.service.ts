import { Injectable } from '@angular/core'
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { ProductoI } from '../models/views/product.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

url:string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

//getSingleProduct(id:any):Observable<ProductoI>{
//let direction = this.url + id;
//return this.http.get<ProductoI>(direction);

//  }

  public getSingleProduct(id: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + sessionStorage.getItem('userToken'),
      }),
    };
    return this.http.get<ProductoI>(
      this.url + '/' + id,
      httpOptions
    );
}
 
  
}
