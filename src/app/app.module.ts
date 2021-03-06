import { UserService } from './user.service';
import { AuthGardService } from './auth-gard.service';
import { AuthService } from './auth.service';

import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { BsNavBarComponent } from './bs-nav-bar/bs-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';



@NgModule({
  declarations: [
    AppComponent,
    BsNavBarComponent,
    HomeComponent,
    ProductsComponent,
    ShopingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path : '' , component : HomeComponent },
      {path : 'Products' , component : ProductsComponent },
      {path : 'Shopping-cart' , component : ShopingCartComponent },
      {path : 'login' , component : LoginComponent },
       
      {path : 'my/orders' , component : MyOrdersComponent, canActivate: [AuthGardService] },
      {path : 'order-success' , component : OrderSuccessComponent, canActivate: [AuthGardService] },
      {path : 'check-out' , component : CheckOutComponent, canActivate: [AuthGardService] },
      
      {path : 'admin/products' , component : AdminProductsComponent, canActivate: [AuthGardService] },
      {path : 'admin/orders' , component : AdminOrdersComponent, canActivate: [AuthGardService] }

    ])
  ],
  providers: [
    AuthService,
    AuthGardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
