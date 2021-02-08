import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UserinfoService } from '../login/userinfo.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('obj') obj:any;
  @Input('deleteserve') deleteserve:any;
  props:any[] = [];
objvalues:any[]=[];


async deletef(i:any,ind:number)
  {
    // location.reload();

  let t =   window.confirm("Are You Sure ? ");
  if(t){
    // console.log(this.deleteserve)
  console.log('sure '+ t);
    const body = {
      "id":i.id
  };


    this.http.post<any>('http://localhost:8081/'+this.deleteserve, body, { }).subscribe(data => {
      // this.postId = data.id;
      console.log(data)

  },
err=>{
  console.log('error Rest');
  // console.log('index '+ ind);
},
()=>{
  console.log('index' + ind);

console.log('completed')
}
  );

  this.obj.splice(ind,1);



  }

}


  constructor(private http:HttpClient,private serve:UserinfoService) {}

  ngOnInit(): void {
// console.log(this.obj)
if(this.obj.length>0){
var obje = this.obj[0];
this.props = Object.keys(obje);
console.log(this.props)
for(let i=0;i<this.obj.length;i++)
{
  for(let p=0;p<this.props.length;p++){
  // console.log(i);
  this.objvalues.push(this.obj[i][`${this.props[p]}`]);
  console.log(this.props[p]+' : '+this.obj[i][`${this.props[p]}`]);
  }
}
    }  }

}
