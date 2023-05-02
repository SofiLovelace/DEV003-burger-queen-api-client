import { Component } from '@angular/core';
import { IUsers } from 'src/app/models/views/admin.interface';
import { HttpsService } from 'src/app/services/https.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css'],
})
export class GestionUsersComponent {
  public users: IUsers[] = [];

  constructor(private httpsService: HttpsService) {}

  public getUsers() {}
}
