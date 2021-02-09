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
defaulttoken:any;
  constructor(private router:Router,private route:ActivatedRoute) {
    this.defaulttoken = localStorage.getItem('token');
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokereq = request.clone({
setHeaders:{
  Authorized:`${localStorage.getItem('token')}`
}
    });
    console.log( this.router.url)
    if(!!!localStorage.getItem("token")|| this.defaulttoken!==localStorage.getItem('token')
    &&this.router.url!=='/login'){ // if user is not auth
      // window.alert('User Is Not Auth');
 this.router.navigate(['/login']);
    }
    return next.handle(tokereq);
  }
}
