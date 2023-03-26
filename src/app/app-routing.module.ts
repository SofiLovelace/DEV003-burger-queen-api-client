import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './views/login/login.component';
import { WaiterComponent } from './views/waiter/waiter.component';

const routes: Routes = [
  {path: '', component: loginComponent },
  {path: 'waiter', component: WaiterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
