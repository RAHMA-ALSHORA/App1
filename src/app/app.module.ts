import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductComponent } from './product/product.component';
import { CatrgComponent } from './catrg/catrg.component';
import { BrandsComponent } from './brands/brands.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProdtelesComponent } from './prodteles/prodteles.component';
import { ForgitpassComponent } from './forgitpass/forgitpass.component';
import { RestpassComponent } from './restpass/restpass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './payment/payment.component';
import { AllorderComponent } from './allorder/allorder.component';
import { SearchPipe } from './search.pipe';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { LoadingComponent } from './loading/loading.component';
import { GloadInterceptor } from './gload.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistComponent,
    HomeComponent,
    CartComponent,
    WishlistComponent,
    ProductComponent,
    CatrgComponent,
    BrandsComponent,
    NavbarComponent,
    NotfoundComponent,
    ProdtelesComponent,
    ForgitpassComponent,
    RestpassComponent,
    PaymentComponent,
    AllorderComponent,
    SearchPipe,
    MainsliderComponent,
    LoadingComponent
  ],
  imports: [
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GloadInterceptor,
      multi: true,
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
