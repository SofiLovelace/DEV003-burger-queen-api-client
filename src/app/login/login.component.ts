import { Component } from '@angular/core';

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


}
