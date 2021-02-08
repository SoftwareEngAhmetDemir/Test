import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('').subscribe(d=>{},err=>err)
  }

}
