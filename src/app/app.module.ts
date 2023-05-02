import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { NewComponent } from './views/nav/admin/gestion-products/new/new.component';
import { EditComponent } from './views/nav/admin/gestion-products/edit/edit.component';
import { ToastrModule } from 'ngx-toastr';
import { EditUserComponent } from './views/nav/admin/gestion-users/edit-user/edit-user.component';
import { NewUserComponent } from './views/nav/admin/gestion-users/new-user/new-user.component';


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
    NewComponent,
    EditComponent,
    EditUserComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({}),
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
