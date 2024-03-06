import { Component, OnInit } from '@angular/core';
import { AllorderService } from 'src/serves/allorder.service';
import { CartsService } from 'src/serves/carts.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitem:any=[];
  constructor(private _cart:CartsService, private _all:AllorderService ){
  }

  ngOnInit():void{
   this.getmycard()
  }

  getmycard(){
    this._cart.getcart().subscribe({
      next:(response)=>{
        this.cartitem=response.data 
        console.log(this.cartitem)
        console.log(this.cartitem.cartOwner)
      }
    })
  }

  updatcart(count:number, id:string){
    if(count==0){
      this.delcard(id)
    }
     this._cart.updatcart(count,id).subscribe({
        next:(resp)=>{
        this.cartitem=resp.data 
        }
     })
  }

  delcard(id:string){
    this._cart.deletcart(id).subscribe({
      next:(respon)=>{
        this.cartitem=respon.data
        this._cart.cartnum.next(respon.numOfCartItems);
      }
    })
  }

  clesrcard(){
    this._cart.cleacart().subscribe({
      next:(res)=>{
          this.cartitem=[]
          this._cart.cartnum.next(res.numOfCartItems);
          console.log(this.cartitem)
      }
    })
  }
  

}


