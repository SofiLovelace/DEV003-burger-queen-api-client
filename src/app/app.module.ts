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
import { NavComponent } from './views/waiter/nav/nav.component';
import { ProductsComponent } from './views/waiter/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    WaiterComponent,
    PageNotFoundComponent,
    CartComponent,
    NavComponent,
    ProductsComponent
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
