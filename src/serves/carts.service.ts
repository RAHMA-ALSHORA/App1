import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartsService {
  cartnum= new BehaviorSubject(0)
    headers:any={
      token:localStorage.getItem('usertoken')
    }
  constructor(private _htt:HttpClient) {
    this.getcart().subscribe({
      next:(respon)=>{
        this.cartnum.next(respon.numOfCartItems)
      }
    })
   }
  Addcart(id:string):Observable<any>{
    return this._htt.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
      productId:id
    },
    {
     headers:this.headers
    })
    }
   
    getcart( ):Observable<any>{
      return this._htt.get(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
       headers:this.headers
      })
      }
      
      updatcart(count:number,id:string):Observable<any>{
        return this._htt.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
          count:count
        },
        {
         headers:this.headers
        })
        }

        deletcart(id:string):Observable<any>{
          return this._htt.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
          {
           headers:this.headers
          })
          }

          cleacart( ):Observable<any>{
            return this._htt.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
            {
             headers:this.headers
            })
            }

          checkout(id:string,formData:any):Observable<any>{
            return this._htt.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,
            {
              shippingAddress:formData
            }
            ,
            {
              headers:this.headers 
            }
            )
          }

}
