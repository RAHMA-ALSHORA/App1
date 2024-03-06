import { Component, OnInit } from '@angular/core';
import { CartsService } from 'src/serves/carts.service';
import { WishService } from 'src/serves/wish.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  constructor(private _wish:WishService,private _cart:CartsService,private toastr: ToastrService){ }
  wishitem:any
  ngOnInit():void{
    this.getmywish()
   }

   getmywish(){
    this._wish.getwish().subscribe({
      next:(response)=>{
        this.wishitem=response.data 
        console.log(this.wishitem)
      }
    })
  }

  delwish(id:string){
    this._wish.deletwish(id).subscribe({
      next:(respon)=>{
        this.wishitem=respon.data
        this._wish.wisnum.next(respon.numOfCartItems);
        this.toastr.success( respon.message,'',{
          positionClass:'toast-top-left',
          timeOut:2000,
          messageClass:'ngx-toastr'
        });
        this.getmywish()
      }
    })
  }

  check(id:string):boolean{
      return this.wishitem.includes(id);
  }

  addtocart(pid:string){
    this._cart.Addcart(pid).subscribe({
      next:(response)=>{
        this._cart.cartnum.next(response.numOfCartItems);
        this.toastr.success( response.message,'',{
          positionClass:'toast-top-left',
          timeOut:2000,

        });
      }
    })
  }

}
