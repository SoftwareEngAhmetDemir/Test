import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
teacher:Observable<any[]> ;
teacherp:any;
firstName:String ='';
lastName:String = '';
phone:String = '';
email:String = '';
adress:String = '';
klass:String = '';
mat:String = '';
open:boolean = false;
savedb:boolean = false;
emptyb:boolean = false;
  constructor(private http:HttpClient) {

this.teacher = new Observable<any[]>(obs=>{
  const httpOptions = {
    // headers: new HttpHeaders({
    //   'Content-Type':  'application/json',
    //   'Authorization': 'jwt-token',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods':' PUT, POST, GET',
    //   'Access-Control-Allow-Credentials': 'true'
    // })
  };
  // httpOptions.headers.set(
  //   'Access-Control-Allow-Credentials', 'true'
  // );
    this.http.get<any>('http://localhost:8081/allTeacher',
httpOptions
    ).subscribe((data:any)=>{
      // console.log(data);
      obs.next(data);
        })


});
this.teacher.subscribe(s=>{
  this.teacherp = s;
  console.log(this.teacherp)
})

  }

  ngOnInit(): void {
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


deletef(obj:any,ind:number)
{
  let t =   window.confirm("Are You Sure ? ");
  if(t){
  // console.log('sure '+ t);
    const body = {
      "id":obj.id
  };

    this.http.post<any>('http://localhost:8081/deleteTeacher', body, { }).subscribe(data => {
      // this.postId = data.id;
      // console.log(data)
  //  this.teacherp.splice(ind,1);

  },
  err=>{
console.log(err);
  },
  ()=>{
    this.teacherp.splice(ind,1);
  });

  }
}

save()
{
  if(this.firstName===''||this.lastName===''||this.phone===''||this.adress===''||this.email===''||this.klass===''||this.mat==='')
  {
this.emptyb = true;
  }
  else{
    //call service for insert the record in db
    let lastId = this.teacherp[this.teacherp.length-1].id+1;
    console.log('the last id is')
    console.log(lastId);
    const body = {
      "id":lastId,
        "firstName":this.firstName,
        "lastName":this.lastName,
        "adress":this.adress,
        "phoneNumber":this.phone,
        "email":this.email,
        "klass":this.klass,
        "material":this.mat
      };
// console.log(body);
    this.http.post<any>('http://localhost:8081/insertTeacher', body, { }).subscribe(data => {
      // this.postId = data.id;
      // console.log(data)

    },
    err=>{
      console.log(err)
    },
    ()=>{
      // this.teacherp.push(body);
      // this.http.get<any>('http://localhost:8081/allTeacher').subscribe((data:any)=>{
        // console.log(data);
       this.teacherp.push(body);
          // })
    });

    //
    this.emptyb = false;
    this.savedb = true;
  }
  setTimeout(() => {
this.savedb=false;
this.emptyb = false;
  }, 1500);
}


}
