import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public user: string | any 

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

  ngOnInit ():void {
    this.user = sessionStorage.getItem('userRole')
    console.log(this.user)
  }
}
