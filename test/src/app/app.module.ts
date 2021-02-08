import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './Components/teacher/teacher.component';
import { ParentComponent } from './Components/parent/parent.component';
import { LoginComponent } from './Components/login/login.component';
import { DashComponent } from './Components/dash/dash.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AfterlogindashComponent } from './Components/afterlogindash/afterlogindash.component';

import { UserinfoService } from './Components/login/userinfo.service';
import { DashcardsComponent } from './Components/dashcards/dashcards.component';
import { StudentComponent } from './Components/student/student.component';
import { AdminComponent } from './Components/admin/admin.component';
import { TableComponent } from './Components/table/table.component';
import { ContactsComponent } from './contacts/contacts.component';
import { userinfoclass } from './Components/login/userinfoclass';
import { MyinterceptorInterceptor } from './Components/myinterceptor/myinterceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    ParentComponent,
    LoginComponent,
    DashComponent,
    NotfoundComponent,
    AfterlogindashComponent,
    DashcardsComponent,
    StudentComponent,
    AdminComponent,
    TableComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule , FormsModule
  ],
  providers: [UserinfoService,{
    provide:HTTP_INTERCEPTORS,
    useClass:MyinterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
