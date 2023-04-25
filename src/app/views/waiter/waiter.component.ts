import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpsService } from 'src/app/services/https.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css'],
})
export class WaiterComponent {
  public view: 'ordersReady' | 'main' = 'main';

  constructor(private router: Router, private HttpsService: HttpsService) {}

  ngOnInit() {
    if (!sessionStorage.getItem('userRole')) {
      this.router.navigate(['/login']);
    }
  }
}
