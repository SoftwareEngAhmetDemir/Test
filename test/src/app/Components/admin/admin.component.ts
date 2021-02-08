import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserinfoService } from '../login/userinfo.service';
import { userinfoclass } from '../login/userinfoclass';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

admin:Observable<any[]> ;
adminp:any;
open:boolean = false;
username:String = '';
firstname:String = '';
lastname:String = '';
pass:String = '';
confirmpass:String = '';
adress:String = '';
email:String = '';
phone:String = '';

savef()
{

  let lastId = this.adminp[this.adminp.length-1].id+1;

  const body = {
"id":lastId,
"username":this.username,
"firstName":this.firstname,
"surname":this.lastname,
"password":this.pass,
"adress":this.adress,
"phonenumber": Number(this.phone),
"email":this.email
  }
  // console.log(body)
this.http.post<any>('http://localhost:8081/save',body,{}).subscribe(data=>{
// console.log(data) // show the data
},
err=>{
console.log('error: ');
console.log(err);
},
()=>{
//   this.http.get<any>('http://localhost:8081/allUsers').subscribe((data:any)=>{
//     console.log(data);
//     if(data)
//    this.adminp = data;


// });

this.adminp.push(body);
});
// this.serve.set_all_data(body);
// this.adminp.push(body);
}





add()
{
 if(this.open)
 this.open=false;
 else{
   this.open = true;
 }
}

cancelf()
{
  this.open = false;
}
  constructor(private http:HttpClient,private serve:UserinfoService) {

this.admin = new Observable<any[]>(obs=>{

    this.http.get<any>('http://localhost:8081/allUsers').subscribe((data:any)=>{
      console.log(data);
      if(data)
      obs.next(data);
        })

});

this.admin.subscribe(s=>{
  this.adminp = s;
})

  }

  ngOnInit(): void {
  }


}
