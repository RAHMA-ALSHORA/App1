import { Component } from '@angular/core';
import { AllorderService } from 'src/serves/allorder.service';
import { CartsService } from 'src/serves/carts.service';
import { OuthService } from 'src/serves/outh.service';

@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.css']
})
export class AllorderComponent {
  orders:any[]=[]
  userId:string=''
  constructor(private _all:AllorderService, private _auth:OuthService){}

  ngOnInit():void{
   this._auth.userData.subscribe((res:any)=>{
    this.userId=res.id
   })
   this.allorder()
  }

  allorder( ){
    this._all.getuserorder(this.userId).subscribe({
     next:(resp)=>{
       this.orders=resp
     },error:(err)=>{
      console.log(err);
      return;
     }
    })
  }

}
