import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartsService } from 'src/serves/carts.service';
import { ProductService } from 'src/serves/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-prodteles',
  templateUrl: './prodteles.component.html',
  styleUrls: ['./prodteles.component.css']
})
export class ProdtelesComponent implements OnInit{
  constructor(private _Activ:ActivatedRoute ,private _cart:CartsService, private _product:ProductService,private toastr: ToastrService){}
  productdet:any=[];
  img:any=[];
  ngOnInit():void{
  let id = this._Activ.snapshot.params['id'];
  // console.log(id),
  this._product.getprod(id).subscribe({
    next: (response) => {
        this.productdet = response.data;
        this.img=this.productdet.images;
        console.log(this.img);
    },
    error: (error) => {
        console.error(error); 
    }
});
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
}

