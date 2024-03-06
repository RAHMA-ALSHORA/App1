import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartsService } from 'src/serves/carts.service';
import { OuthService } from 'src/serves/outh.service';
import { WishService } from 'src/serves/wish.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  carnum!:number
  islog:boolean=false;
  constructor(private _auth:OuthService, private _rout:Router,private _cart:CartsService){
    _auth.userData.subscribe({
      next:()=>{
        if(_auth.userData.getValue() !== null){
          this.islog=true;
        }else{
          this.islog=false;
        }
      }
    })  
  }
  ngOnInit():void{
    this._cart.cartnum.subscribe({
      next:(res)=>{
        console.log(res)
       this.carnum=res
      }
    })
  }
  logout():void{
   this._auth.logout()
   this._rout.navigate(['/log in']) 
  }
  cartitem:any;
  refrsh():void{
    this._cart.getcart().subscribe({
      next:(res)=>{
        this.cartitem=res.data 
        console.log(this.cartitem)  
      }
    })
  }
  
}
