import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }
  getpro():Observable<any>{
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

  getprod(id:any):Observable<any>{
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getcatig():Observable<any>{
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
}
