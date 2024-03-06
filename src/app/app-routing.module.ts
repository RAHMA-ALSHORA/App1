import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductComponent } from './product/product.component';
import { CatrgComponent } from './catrg/catrg.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProdtelesComponent } from './prodteles/prodteles.component';
import { authGuard } from './auth.guard';
import { ForgitpassComponent } from './forgitpass/forgitpass.component';
import { RestpassComponent } from './restpass/restpass.component';
import { PaymentComponent } from './payment/payment.component';
import { AllorderComponent } from './allorder/allorder.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
 {path:'home',canActivate:[authGuard], component:HomeComponent},
 {path:'cart', canActivate:[authGuard],component:CartComponent},
 {path:'wish list',canActivate:[authGuard], component:WishlistComponent},
 {path:'Products',canActivate:[authGuard], component:ProductComponent},
 {path:'prodteles/:id',canActivate:[authGuard],component:ProdtelesComponent},
 {path:'catrgories',canActivate:[authGuard],component:CatrgComponent},
 {path:'brands',canActivate:[authGuard],component:BrandsComponent},
 {path:'log out',canActivate:[authGuard], component:RegistComponent},
 {path:'log in',component:LoginComponent},
 {path:'register', component:RegistComponent},
 {path:'forgitpassword',component:ForgitpassComponent},
 {path:'restpassword',component:RestpassComponent},
 {path:'chekout',canActivate:[authGuard],component:PaymentComponent},
 {path:'allorders',component:AllorderComponent},
 {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
