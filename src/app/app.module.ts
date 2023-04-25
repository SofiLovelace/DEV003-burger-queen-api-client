import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WaiterComponent } from './views/waiter/waiter.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HttpClientModule} from '@angular/common/http'
import { CartComponent } from './views/waiter/cart/cart.component';
import { NavComponent } from './views/nav/nav.component';
import { ProductsComponent } from './views/waiter/products/products.component';
import { ModalComponent } from './views/waiter/cart/modal/modal.component';
import { ChefComponent } from './views/chef/chef.component';
import { AdminComponent } from './views/admin/admin.component';
import { OrderComponent } from './views/chef/order/order.component';
import { ModalComponentChef } from './views/chef/order/modal/modal.component';
import { OrdersReadyComponent } from './views/waiter/orders-ready/orders-ready.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
