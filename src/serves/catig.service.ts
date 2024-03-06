import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatigService {

  constructor(private _htt:HttpClient) { }
  
  getcatig():Observable<any>{
    return this._htt.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  getsbccatig(id:string):Observable<any>{
    return this._htt.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
  }
}
