import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadService } from 'src/serves/load.service';

@Injectable()
export class GloadInterceptor implements HttpInterceptor {

  constructor(private LoadService:LoadService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.LoadService.show();

     return next.handle(request).pipe(
           finalize(() => this.LoadService.hide()),
     );
}
}
