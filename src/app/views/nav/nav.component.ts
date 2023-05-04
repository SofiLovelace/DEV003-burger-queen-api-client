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

  public logout(): void {
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.user = this.getUser();
    if (!sessionStorage.getItem('userRole')) {
      this.router.navigate(['/login']);
    }
  }
}
