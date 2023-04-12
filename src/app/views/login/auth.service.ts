import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HttpsService } from 'src/app/services/https.service'


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http: HttpClient,
    private HttpsService: HttpsService
    ) { }

  public auth(path: string, body: object): any { // es importante typar lo que retornara una función
    return this.http.post(this.HttpsService.urlApiWebSofi + path, body) // el metodo http ya devuelve un observable
  }
  
}
