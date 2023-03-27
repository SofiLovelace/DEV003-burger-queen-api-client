import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { min } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent {

  /** Establecemos geters para poderlos ocupar en html y tener un codigo mas limpio **/
  get user(){
    return this.credential.get('user') as FormControl
  }
  get password(){
    return this.credential.get('password') as FormControl
  }

  /** Declaramos un objeto en forma de formGroup **/
  credential = new FormGroup({
    'user': new FormControl('', [Validators.required, Validators.email]), // establecemos valor por defecto y reglas de validacion para cada campo
    'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
  })
  process(){
    console.log(this.credential.value)
  }

  constructor(private titleService: Title){ // // Con un constructor podemos agregar elementos a html de forma dinamica
    this.titleService.setTitle('BQ-Login')  // // Title es un modulo para cambiar el title del head de forma dinamica
  }

}
