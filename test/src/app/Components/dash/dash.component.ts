import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../login/userinfo.service';
import { userinfoclass } from '../login/userinfoclass';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private sv:UserinfoService) { }

  ngOnInit(): void {
    console.log(this.sv.get_username());
    console.log('after')
  }

}
