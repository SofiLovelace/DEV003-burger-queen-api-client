import { Component } from '@angular/core';
import { IUsers } from 'src/app/models/views/admin.interface';
import { HttpsService } from 'src/app/services/https.service';
import { ServiceAddToCarService } from 'src/app/services/service-add-to-car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css'],
})
export class GestionUsersComponent {
  constructor(
    private HttpsService: HttpsService,
    private ServiceAdd: ServiceAddToCarService,
    private toastr: ToastrService
  ) {}

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

  public sendUserToEdit(data: IUsers) {
    setTimeout(() => {
      this.ServiceAdd.activatorAddToCart.emit(data);
    }, 1);
  }

  ShowSuccess() {
    this.toastr.success(
      'Puedes crear un nuevo usuario en el boton: NUEVO USUARIO',
      'Se elimino el usuario con exito!',
      {
        easing: 'ease-in',
        easeTime: 1000,
      }
    );
  }

  public deleteUser(id: number): void {
    this.HttpsService.delete(`users/${id}`).subscribe({
      next: (data: any) => {
        console.log('usuario eliminado', data);
      },
      error: (err: any) => {
        console.log('error no se elimino', err);
      },
      complete: () => {
        this.getUsers();
        this.ShowSuccess();
      },
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
