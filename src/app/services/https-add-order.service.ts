import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpsService } from './https-waiter.service';

@Injectable({
  providedIn: 'root'
})
export class HttpsAddOrderService {

  constructor(
    private http: HttpClient,
    private httpsServer: HttpsService
    ) { }

  public postOrder (body: any){
    const httpOptions:any = {
      Headers: new HttpHeaders({
        Authorization: 'Bearer ' + sessionStorage.getItem('userToken')
      })
    }
    return this.http.post(this.httpsServer.urlApiWebSofi + '/orders', body, httpOptions)
  }
}