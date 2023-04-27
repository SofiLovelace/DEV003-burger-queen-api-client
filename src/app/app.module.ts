import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WaiterComponent } from './views/nav/waiter/waiter.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './views/nav/waiter/ordain/cart/cart.component';
import { NavComponent } from './views/nav/nav.component';
import { ProductsComponent } from './views/nav/waiter/ordain/products/products.component';
import { ModalComponent } from './views/nav/waiter/ordain/cart/modal/modal.component';
import { ChefComponent } from './views/nav/chef/chef.component';
import { AdminComponent } from './views/nav/admin/admin.component';
import { OrderComponent } from './views/nav/chef/order/order.component';
import { ModalComponentChef } from './views/nav/chef/order/modal/modal.component';
import { OrdersReadyComponent } from './views/nav/waiter/orders-ready/orders-ready.component';
import { OrdainComponent } from './views/nav/waiter/ordain/ordain.component';
import { ModalDeliveringComponent } from './views/nav/waiter/orders-ready/modal-delivering/modal-delivering.component';
import { GestionUsersComponent } from './views/nav/admin/gestion-users/gestion-users.component';
import { GestionProductsComponent } from './views/nav/admin/gestion-products/gestion-products.component';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    WaiterComponent,
    PageNotFoundComponent,
    CartComponent,
    NavComponent,
    ProductsComponent,
    ModalComponent,
    ModalComponentChef,
    ChefComponent,
    AdminComponent,
    OrderComponent,
    OrdersReadyComponent,
    OrdainComponent,
    ModalDeliveringComponent,
    GestionUsersComponent,
    GestionProductsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
