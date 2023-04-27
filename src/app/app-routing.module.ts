import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './views/login/login.component';
import { NavComponent } from './views/nav/nav.component';
import { ChefComponent } from './views/nav/chef/chef.component';
import { AdminComponent } from './views/nav/admin/admin.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { WaiterComponent } from './views/nav/waiter/waiter.component';
import { OrdainComponent } from './views/nav/waiter/ordain/ordain.component';
import { OrdersReadyComponent } from './views/nav/waiter/orders-ready/orders-ready.component';
import { GestionProductsComponent } from './views/nav/admin/gestion-products/gestion-products.component';
import { GestionUsersComponent } from './views/nav/admin/gestion-users/gestion-users.component';

const routes: Routes = [
  { path: 'login', component: loginComponent },
  {
    path: 'nav',
    component: NavComponent,
    children: [
      {
        path: 'waiter',
        component: WaiterComponent,
        children: [
          { path: 'ordain', component: OrdainComponent },
          { path: 'orders-ready', component: OrdersReadyComponent },
        ],
      },
      { path: 'chef', component: ChefComponent },
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: 'users', component: GestionUsersComponent },
          { path: 'products', component: GestionProductsComponent },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
