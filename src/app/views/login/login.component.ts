import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent {

  credential = {
    user: '',
    password:'',
  }
  process(){
    console.log(this.credential);
  }

  constructor(private titleService: Title){ // // Con un constructor podemos agregar elementos a html de forma dinamica
    this.titleService.setTitle('BQ-Login')  // // Title es un modulo para cambiar el title del head de forma dinamica
  }

}
