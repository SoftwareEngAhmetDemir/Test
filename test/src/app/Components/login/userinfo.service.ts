import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userinfoclass } from './userinfoclass';

@Injectable({
  providedIn: 'root'
})

export class UserinfoService {

  username:String = '';
  email:String = '';
  adress:String = '';
  phone:String = '';
  lastname:String = '';
  password:String = '';
all_data:any;

constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){

}
logOut()
{
  localStorage.removeItem('token');
  return this.router.navigate(['/login'],{relativeTo:this.route});
}
verifyToken():any
{
  if(!!localStorage.getItem("token")){

  let token = localStorage.getItem("token");
  if(token===''||token===null)
  return 'false';
  let options:any = {responseType:'text'};
return this.http.get<any>(`http://localhost:8081/verifytoken`,
options);
}
}
set_all_data(o:any)
{
  this.all_data = o;
}
get_all_data():any
{
  return this.all_data;
}
set_username(name:String):void{
this.username = name;
}
set_lastname(l:String):void{
  this.lastname = l;
}
set_email(e:String):void{
  this.email = e;
}
set_phone(p:String):void{
  this.phone = p;
}
set_adress(ad:String):void{
this.adress =ad;
}

get_username():String{
  return this.username;
}
get_surname():String{
  return this.lastname;
}
get_full_Name():String
{
  return this.username+" "+this.lastname;
}
get_email():String
{
return this.email;
}
get_phone():String{
  return this.phone;
}
get_address():String{
  return this.adress;
}

}
