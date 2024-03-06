import { Component, OnInit } from '@angular/core';
import{prod} from 'src/app/interface/prod';
import { ProductService } from 'src/serves/product.service';
import { CartsService } from 'src/serves/carts.service';
import { ToastrService } from 'ngx-toastr';
import { WishService } from 'src/serves/wish.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
searchvalue:string=''
load:boolean=true;
productlist:prod[]=[];
constructor(private _pro:ProductService,private _cart:CartsService,private toastr: ToastrService,private _wish:WishService){
}
ngOnInit(): void {
  this._pro.getpro().subscribe({
    next:(respone)=>{
      this.productlist=respone.data
      this.load=false;

    },
    error:()=>{},
    
   })
}
addtocart(pid:string){
  this._cart.Addcart(pid).subscribe({
    next:(response)=>{
      this._cart.cartnum.next(response.numOfCartItems);
      this.toastr.success( response.message,'',{
        positionClass:'toast-top-left',
        timeOut:2000
      });
    }
  })
}
 
addwish(id:string){
  this._wish.addwish(id).subscribe({
    next:(response)=>{
      console.log(response.data)
      this.toastr.success( response.message,'',{
        positionClass:'toast-top-left',
        timeOut:2000
      });
    }
  })
}
wishitem:any;
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
selectedIcon: string | null = null;
changcolor(id:string){
  if (this.selectedIcon === id) {
    this.selectedIcon = null;
    this.delwish(id)
  } else {
    this.selectedIcon = id; 
    this.addwish(id) 
}
}
}
