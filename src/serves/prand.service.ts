import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrandService {

  constructor(private _htt:HttpClient) { }

  getprand():Observable<any>{
    return this._htt.get(`https://ecommerce.routemisr.com/api/v1/brands`)
   }

   subpran(id:string):Observable<any>{
    return this._htt.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
   }
}
