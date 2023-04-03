import { Injectable } from '@angular/core'
import { credentialU } from 'src/app/models/login/login.inferface'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private urlApi = 'http://localhost:8080'
  constructor(private http: HttpClient) { }
  public get(path: string, body: object): any { // es importante typar lo que retornara una función
    return this.http.post(this.urlApi + path, body) // el metodo http ya devuelve un observable
  }
  
}
