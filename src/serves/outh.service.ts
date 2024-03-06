import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OuthService {

  constructor( private _http:HttpClient) {
    if(localStorage.getItem('usertoken') !== null){
      this. saveuserdata()
    }
   }
  userData=new BehaviorSubject(null);
  saveuserdata(){
   let endtoken:any= localStorage.getItem('usertoken')
   let detoken:any= jwtDecode(endtoken)
   this.userData.next(detoken);
  }

  logout(){
    localStorage.removeItem('usertoken')
    this.userData.next(null)
  }
  regist(formdata:any):Observable<any>
  {
   return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formdata)
}

log(formdata:any):Observable<any>
  {
   return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formdata)
}

forgitpassword(formdata:any):Observable<any>
{
 return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,formdata)
}

verfcode(formdata:any):Observable<any>
{
 return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,formdata)
}

resetpass(formdata:any):Observable<any>
{
 return this._http.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,formdata)
}



}
