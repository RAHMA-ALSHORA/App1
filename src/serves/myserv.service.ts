import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor( private _http:HttpClient) { }

  getpro():Observable<any>{
    return this._http.get(`https://documenter.getpostman.com/view/5709532/2s93JqTRWN`);
  }
}
