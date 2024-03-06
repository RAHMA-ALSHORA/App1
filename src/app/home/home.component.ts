import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/serves/product.service';
import{prod} from 'src/app/interface/prod';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartsService } from 'src/serves/carts.service';
import { ToastrService } from 'ngx-toastr';
import { WishService } from 'src/serves/wish.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchvalue:string=''
  load:boolean=true;
  prodlist:prod[]=[];
  constructor(private _pro:ProductService, private _cart:CartsService,private toastr: ToastrService,private _wish:WishService){}
  ngOnInit():void{
   this._pro.getpro().subscribe({
    next:(respone)=>{
      this.prodlist=respone.data
      this.load=false;
    },
   })
   this.catig();
  }
   catiglist:any[]=[]
  catig():void{
    this._pro.getcatig().subscribe({
      next:(response)=>{
        this.catiglist= response.data
      },
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
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



