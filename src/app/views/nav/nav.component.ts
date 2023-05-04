import { Component } from '@angular/core';
import { HttpsService } from 'src/app/services/https.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  public user: string | any;

  constructor(
    private HttpsService: HttpsService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public getUser(): string | any {
    return sessionStorage.getItem('userRole');
  }

  private ShowSuccess(type: '' | 'logout' | 'success') {
    let message: string = '';
    type === 'logout'
      ? (message = 'Sesión cerrada exitosamente')
      : (message = 'Sesion expirada');

    this.toastr.success('', message, {
      easing: 'ease-in',
      easeTime: 1000,
    });
  }

  public logout(type: '' | 'logout' | 'success'): void {
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userToken');
    this.ShowSuccess(type);
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.user = this.getUser();
    if (!sessionStorage.getItem('userRole')) {
      this.router.navigate(['/login']);
    }
  }
}
