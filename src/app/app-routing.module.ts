import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './views/login/login.component';
import { WaiterComponent } from './views/waiter/waiter.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component'

const routes: Routes = [
  {path: 'login', component: loginComponent },
  {path: 'waiter', component: WaiterComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
