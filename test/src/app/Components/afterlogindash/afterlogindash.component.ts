import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserinfoService } from '../login/userinfo.service';

@Component({
  selector: 'app-afterlogindash',
  templateUrl: './afterlogindash.component.html',
  styleUrls: ['./afterlogindash.component.css']
})
export class AfterlogindashComponent implements OnInit  {

  constructor(private sv:UserinfoService,
    private router:Router,private rout:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.sv);
    console.log('after')
  }
logout()
{
  return this.sv.logOut();
}
  go_to(url:String)
  {if(url==='')
   return this.router.navigate(['login/dash']);
return this.router.navigate([url],{relativeTo:this.rout});
  }

}
