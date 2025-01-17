import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponseProduct } from '../models/views/waiter.interface';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpsService {
  // public urlApiWebSofi = 'http://localhost:8080';
  // public urlApiWebNico = 'https://burgermock-api.onrender.com'

  public urlApiWebSofi = 'https://burguerqueen-service.onrender.com';

  constructor(private http: HttpClient) {}

  public get(category: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + sessionStorage.getItem('userToken'),
      }),
    };
    return this.http.get<IResponseProduct>(
      this.urlApiWebSofi + '/' + category,
      httpOptions
    );
  }

  public post(category: string, body: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + sessionStorage.getItem('userToken'),
      }),
    };
    return this.http.post(
      this.urlApiWebSofi + '/' + category,
      body,
      httpOptions
    );
  }

  public patch(category: string, body: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + sessionStorage.getItem('userToken'),
      }),
    };
    return this.http.patch(
      this.urlApiWebSofi + '/' + category,
      body,
      httpOptions
    );
  }

  public delete(category: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + sessionStorage.getItem('userToken'),
      }),
    };
    return this.http.delete<IResponseProduct>(
      this.urlApiWebSofi + '/' + category,
      httpOptions
    );
  }
}
