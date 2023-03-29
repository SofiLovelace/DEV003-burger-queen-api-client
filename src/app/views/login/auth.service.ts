import { Injectable } from '@angular/core'
import { credentialU } from 'src/app/models/login/login.inferface'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi = 'http://localhost:8080'
  constructor(private http: HttpClient) { }
  public get(path: string, body: object){
    return this.http.post(this.urlApi + path, body)
  }
  /* getAuthLogin(): Observable<credentialU> {
    return this.http.post(this.urlApi, this.credential.value)
  } */
}
