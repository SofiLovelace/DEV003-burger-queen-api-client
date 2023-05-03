import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpsService } from 'src/app/services/https.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsers } from 'src/app/models/views/admin.interface';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent {
  public userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(6)]),
  });

  constructor(
    private router: Router,
    private HttpsService: HttpsService,
    private toastr: ToastrService
  ) {}

  public addUser(): void {
    this.HttpsService.post('users', this.userForm.value).subscribe({
      next: (data: any) => {
        console.log('nuevo usuario', data);
      },
      error: (err: any) => {
        console.log('error', err);
      },
      complete: () => {
        setTimeout(() => {
          this.router.navigate(['/nav/admin/users']);
        }, 1000);
        console.log('complete');
      },
    });
  }
}
