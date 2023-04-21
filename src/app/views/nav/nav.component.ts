import { Component } from '@angular/core';
import { HttpsService } from 'src/app/services/https.service';
import { IResponseOrder } from 'src/app/models/views/chef.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public user: string | any 
  public delivering: number = 0
  public cooking: number = 0

  constructor ( private HttpsService: HttpsService ) {}

  public getUser ():string | void {
    let user = sessionStorage.getItem('userRole')
    if (user === 'admin' ) {
      return 'Administrador'
    }
    if (user === 'waiter' ) {
      return 'Mesero'
    }
    if (user === 'kitchen' ) {
      return 'Chef'
    }
    this.user = user
  }


  public getOrders(): void {
    this.HttpsService.get('orders')
      .subscribe({
        next: (response: IResponseOrder[]) => {
          this.cooking = response.filter(order => order.status === 'pending').length
          this.delivering = response.filter(order => order.status === 'delivering').length
        },
        error: (err: any) => {
          console.log('error', err) // gestion de errores
        },
        complete: () => {
          console.log('complete') // codigo correcto
        }
      })
  }


  ngOnInit ():void {
    this.user = sessionStorage.getItem('userRole')
    this.getOrders()
    setInterval(() => {
      this.getOrders()
    }, 10000)
  }
}
