import { Component } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})

export class WaiterComponent {
  constructor(private router:Router) { } 
  
  ngOnInit(){
    if(!sessionStorage.getItem('userRole')){
      this.router.navigate(['/login'])}
  }

  public validateAuth() {
    if(!sessionStorage.getItem('userRole')){
      this.router.navigate(['/login'])} 
  }
  
}

WaiterComponent

