import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpsService } from 'src/app/services/https.service';
import { Router } from '@angular/router';
import { ServiceAddToCarService } from 'src/app/services/service-add-to-car.service';
import { ToastrService } from 'ngx-toastr';
import { IUsers } from 'src/app/models/views/admin.interface';
import { NavComponent } from '../../../nav.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  public userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(6)]),
  });

  public dataUser: any | IUsers;

  constructor(
    private router: Router,
    private HttpsService: HttpsService,
    private ServiceAdd: ServiceAddToCarService,
    private toastr: ToastrService,
    private navComponent: NavComponent
  ) {}

  public updateUser(id: number): void {
    this.HttpsService.patch(`users/${id}`, this.userForm.value).subscribe({
      next: (data: any) => {
        console.log('data editada', data);
      },
      error: (err: any) => {
        console.log('error', err);
        if (err.status === 401) {
          this.navComponent.logout('success');
        }
      },
      complete: () => {
        setTimeout(() => {
          this.router.navigate(['/nav/admin/users']);
        }, 1000);
        console.log('complete');
      },
    });
  }

  public getDataUser(): void {
    this.ServiceAdd.activatorAddToCart.subscribe({
      next: (data: IUsers) => {
        this.dataUser = data;
        this.userForm.setValue({
          email: data.email,
          role: data.role,
          password: '',
        });
      },
      error: (err: any) => {
        console.log('error', err);
        if (err.status === 401) {
          this.navComponent.logout('success');
        }
      },
      complete: () => console.log('complete'),
    });
  }

  ngOnInit(): void {
    this.getDataUser();
  }
}
