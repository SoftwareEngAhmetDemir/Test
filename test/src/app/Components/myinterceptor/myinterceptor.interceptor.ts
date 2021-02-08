import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class MyinterceptorInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokereq = request.clone({
setHeaders:{
  Authorized:`${localStorage.getItem('token')}`
}
    });
    if(!!!localStorage.getItem("token")){ // if user is not auth
 this.router.navigate(['/login']);
    }
    return next.handle(tokereq);
  }
}
