import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private urlApiLocalHost = 'http://localhost:8080'
  private urlApiWeb = 'https://burgermock-api.onrender.com'
  constructor(private http: HttpClient) { }
  public get(path: string, body: object): any { // es importante typar lo que retornara una función
    return this.http.post(this.urlApiWeb + path, body) // el metodo http ya devuelve un observable
  }
  
}
