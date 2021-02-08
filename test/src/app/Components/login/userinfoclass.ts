export class userinfoclass{
  username:String = '';
  email:String = '';
  adress:String = '';
  phone:String = '';
  lastname:String = '';
  password:String = '';
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
