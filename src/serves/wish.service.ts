import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WishService {
  wisnum= new BehaviorSubject(0)
  headers:any={
    token:localStorage.getItem('usertoken')
  }
  constructor( private _htt:HttpClient) { }

  addwish(id:string):Observable<any>{
     return this._htt.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
     {
      productId:id
    },{
      headers:this.headers
    })
  }

  getwish():Observable<any>{
   return this._htt.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
   {
    headers:this.headers
   })
  }

  deletwish(id:string):Observable<any>{
    return this._htt.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
    {
     headers:this.headers
    })
    }

}
