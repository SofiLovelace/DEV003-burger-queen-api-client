import { Component } from '@angular/core';
import { IUsers } from 'src/app/models/views/admin.interface';
import { HttpsService } from 'src/app/services/https.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css'],
})
export class GestionUsersComponent {
  constructor(private HttpsService: HttpsService) {}

  public users: IUsers[] = [];

  public getUsers(): void {
    this.HttpsService.get('users').subscribe({
      // Nos subscribimos al observable
      next: (data: IUsers[]) => {
        // codigo correcto
        this.users = data;
      },
      error: (err: object) => {
        console.log('error', err); // gestion de errores
      },
      complete: () => console.log('complete'), // codigo que se ejecuta al finalizar la subscripción
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
