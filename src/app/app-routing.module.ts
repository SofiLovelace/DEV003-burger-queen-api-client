import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './views/login/login.component';
import { WaiterComponent } from './views/waiter/waiter.component';
import { ChefComponent } from './views/chef/chef.component';
import { AdminComponent } from './views/admin/admin.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: loginComponent },
  {
    path: 'waiter',
    component: WaiterComponent,
    children: [
      { path: '', component: WaiterComponent },
      { path: 'oredersReady', component: WaiterComponent },
    ],
  },
  { path: 'chef', component: ChefComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
