import { Injectable, Injector } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { UserinfoService } from '../login/userinfo.service';

@Injectable({
  providedIn: 'root'
})
export class LoggaurdGuard implements CanActivate {

  constructor(private injector:Injector,private router:Router,private route:ActivatedRoute){}
 async get_res():Promise<any>
  {  let authService = this.injector.get(UserinfoService);
    return   await    new Promise((res,rej)=>{


      authService.verifyToken().subscribe((data:any)=>{

       if(data==='true'){
      res(true);
      }
      else{

        res(false);

      }


      })
      return false;
  })
}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

console.log('route : ')
      console.log(this.router.url)
// if(this.router.url!=='/'){
return  this.get_res().then(s=>{
  if(s===true)
  {
    return true;
  }

 this.router.navigate(['login']);
 if(this.router.url!=='/')
return false;
else
return true;

})
}


}
