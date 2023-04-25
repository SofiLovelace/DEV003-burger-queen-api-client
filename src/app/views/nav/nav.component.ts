import { Component } from '@angular/core';
import { HttpsService } from 'src/app/services/https.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  public user: string | any;

  constructor(private HttpsService: HttpsService, private router: Router) {}

  public getUser(): string | any {
    return sessionStorage.getItem('userRole');
  }

  ngOnInit(): void {
    this.user = this.getUser();
    if (!sessionStorage.getItem('userRole')) {
      this.router.navigate(['/login']);
    }
    /*   this.user = sessionStorage.getItem('userRole')
    this.getOrders()
    setInterval(() => {
      this.getOrders()
    }, 10000) */
  }
}
