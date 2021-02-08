import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserinfoService } from '../login/userinfo.service';

@Component({
  selector: 'app-dashcards',
  templateUrl: './dashcards.component.html',
  styleUrls: ['./dashcards.component.css']
})
export class DashcardsComponent implements OnInit {

  constructor(public sv:UserinfoService,
    private router:Router,private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('').subscribe(d=>{},err=>err)
  }

  contactPage()
{
this.router.navigate(['contacts'],{relativeTo:this.route});
}
}
