import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parents:Observable<any[]>;
parentsp:any;
s:Subscription;
addb:boolean=false;
firstname:String = '';
lastname:String = '';
phone:String = '';
adress:String = '';
savedb:boolean = false;
emptyb:boolean = false;

  constructor(private http:HttpClient) {
    this.parents = new Observable<any>(obs=>{
      this.http.get<any>('http://localhost:8081/allParent').subscribe((data:any)=>{
        // console.log(data);
        obs.next(data);
          })
    })

this.s = this.parents.subscribe(s=>{
  this.parentsp = s;
})


   }
addf(){

 if(this.addb){
  this.addb=false;
  }
  else{
    this.addb=true;
  }


}
cancelf()
{
  this.addb=false;
}
  ngOnInit(): void {

  }
  deletef(i:any,ind:number)
  {
  let t =   window.confirm("Are You Sure ? ");
  if(t){
  console.log('sure '+ t);
    const body = {
      "id":i.id
  };

    this.http.post<any>('http://localhost:8081/deleteParent', body, { }).subscribe(data => {
      // this.postId = data.id;
      console.log(data)
   this.parentsp.splice(ind,1);
  });

  }
}

savef()
{//console.log('clicked')
//   console.log(this.firstname)
  if(this.firstname===''||this.lastname===''||this.phone===''||this.adress==='')
  {
this.emptyb = true;
  }
  else{
    var lastId;
    if(this.parentsp.length>0)
    lastId = this.parentsp[this.parentsp.length-1].id+1;
    else
    lastId = 1;
  //  let t = this.parentsp.length+1;
    const body = {
        "id":lastId,
        "firstName":this.firstname,
        "lastName":this.lastname,
        "adress":this.adress,
        "phone":this.phone
      };

    this.http.post<any>('http://localhost:8081/insertParent', body, { }).subscribe(data => {
      // this.postId = data.id;
      // console.log(data)

    },
    err=>{
console.log(err);
    },
()=>{
  // this.http.get<any>('http://localhost:8081/allParent').subscribe((data:any)=>{
    // console.log(data);
  this.parentsp.push(body);

      // })





}
    );

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
