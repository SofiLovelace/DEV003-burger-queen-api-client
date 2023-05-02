import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpsService } from 'src/app/services/https.service';
import { Router } from '@angular/router';
import { ServiceAddToCarService } from 'src/app/services/service-add-to-car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  public changePassword: boolean = false;
  public userForm: any;

  constructor(
    private router: Router,
    private HttpsService: HttpsService,
    private ServiceAdd: ServiceAddToCarService,
    private toastr: ToastrService
  ) {}

  public changedPassword(): void {
    this.changePassword = !this.changePassword;
    if (this.changePassword) {
      this.userForm = this.userFormPass;
    } else {
      this.userForm = this.userFormNoPass;
    }
  }

  public userFormNoPass = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
  });

  public userFormPass = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.userForm = this.userFormNoPass;
  }
}
