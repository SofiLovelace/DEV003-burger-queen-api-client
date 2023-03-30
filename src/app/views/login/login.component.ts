import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { FormGroup, FormControl, Validators } from '@angular/forms'
// import { min } from 'rxjs'
// import { HttpClient } from '@angular/common/http'
import { AuthService } from './auth.service'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { Router } from '@angular/router'
import { HttpResponseBase, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent {

  /** Establecemos geters para poderlos ocupar en html y tener un codigo mas limpio **/
  get email(){
    return this.credential.get('email') as FormControl
  }
  get password(){
    return this.credential.get('password') as FormControl
  }

  /** Declaramos un objeto en forma de formGroup **/
  credential = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]), // establecemos valor por defecto y reglas de validacion para cada campo
    'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

    constructor(
      private AuthService:AuthService,
      private router:Router) { }

  public login(){
    this.AuthService.get('/login', this.credential.value)//esto restorna un observable
    .subscribe({  // Nos subscribimos al observable
      next: (data: any)=> { // codigo correcto
        if (data.user.role === 'admin' || data.user.rol === 'waiter') {
          this.router.navigate(['/waiter'])} // navegacion 
      },
      error: (err: any)=>console.log('error',err), // gestion de errores
      complete:()=>console.log('complete')  // codigo que se ejecuta al finalizar la subscripción
    })
  }
}
    /*new Observable (observer => {
      this.AuthService.get('/login', this.credential.value)
       .subscribe(HttpResponseBase => {
        console.log('1er =========', HttpResponseBase)
        console.log('STRINGIFY =========', (HttpResponseBase) )
        if (HttpResponseBase) {
          this.router.navigate (['/waiter'])
        }
      },
      error => {
       console.log(error)
      }) */
      //fetch('https://pokeapi.co/api/v2/pokemon/pikachu') 
    /* this.AuthService.get('/login', this.credential.value)
      .subscribe(HttpResponseBase => {
      console.log('1er =========', HttpResponseBase.accessToken)
      console.log('STRINGIFY =========', (HttpResponseBase) )
      if (HttpResponseBase) {
        this.router.navigate (['/waiter'])
      }
    },
    error => {
     console.log(error)
    }) */
 


/* .subscribe({
  next: (data)=>console.log('data', data),
  error: (err)=>console.log('error',err),
  complete:()=>console.log('complete')
}) */