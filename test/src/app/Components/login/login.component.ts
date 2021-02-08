import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserinfoService } from './userinfo.service';
import { userinfoclass } from './userinfoclass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:String = '';
password:String = '';
userempty:boolean = false;
usererror:boolean= false;
passwordempty:boolean = false;
passorusererror:boolean = false;


  constructor(private http:HttpClient,private router:Router
    ,private route:ActivatedRoute,private sv:UserinfoService) {

      let headers = new HttpHeaders()

headers=headers.append('soyad','Start')
     }

  ngOnInit(): void {
// console.log(!!localStorage.getItem("token"))

  }

datas:any;
  async deneme()
  {



 this.sv.verifyToken()




console.log(this.datas)
  }

async login(){
  const options:any = {
    responseType: 'text',
  };




    const body = {
      "username":this.username,
  };
  if(this.username&&this.password){



    this.http.post<any>('http://localhost:8081/login', body, { }).subscribe(async(data:any) => {
      // this.postId = data.id;

      console.log(data.headers);
      if(data.username!==null)
      {


        // console.log('var')
        if(data.password===this.password)
        {
await new Promise((res,rej)=>{


 this.http.get<String>(`http://localhost:8081/token?username=${data.username}&password=${data.password}`,
 options)
  .subscribe(das=>{

  localStorage.setItem("token",das.toString());
res("")
  })
})

 this.sv.set_username(data.username);
 this.sv.set_lastname(data.surname);
 this.sv.set_adress(data.adress);
 this.sv.set_phone(data.phonenumber);
 this.sv.set_email(data.email);

//  console.log('our user name '+this.sv.get_username())

this.router.navigate(['dash'],{relativeTo:this.route});
        }
        else{
        //  console.log('password veya sifre yanlis');
          this.passorusererror = true;
          this.usererror = false;
          this.userempty = false;
this.passwordempty = false;
        }
      }
      else{
       // console.log('kullanici bulunmadi');
        this.usererror = true;
        this.passorusererror = false;
        this.userempty = false;
this.passwordempty = false;
      }

  });

  }//end if

  else {

    if(!this.username)
this.userempty = true;
else{
  this.userempty = false;
}
if(!this.password)
this.passwordempty = true;
else{
  this.passwordempty = false;
}
this.usererror = false;
this.passorusererror = false;
  }
  }

}
