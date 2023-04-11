import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { HttpsService } from 'src/app/services/https-waiter.service';


@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})

export class WaiterComponent {
  constructor(
    private router:Router,
    private HttpsService: HttpsService
    ) { } 
  
  ngOnInit(){
    if(!sessionStorage.getItem('userRole')){
      this.router.navigate(['/login'])
    }
  }  
}