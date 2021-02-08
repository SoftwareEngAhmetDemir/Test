import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { AfterlogindashComponent } from './Components/afterlogindash/afterlogindash.component';
import { DashcardsComponent } from './Components/dashcards/dashcards.component';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ParentComponent } from './Components/parent/parent.component';
import { StudentComponent } from './Components/student/student.component';
import { TeacherComponent } from './Components/teacher/teacher.component';
import {LoggaurdGuard } from './Components/gaurdlog/loggaurd.guard';
import { ContactsComponent } from './contacts/contacts.component';
const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login/dash',component:AfterlogindashComponent,canActivate: [LoggaurdGuard],
  children:[
    {path:'',component:DashcardsComponent},
    {path:'parents',component:ParentComponent},
    {path:'student',component:StudentComponent},
    {path:'admin',component:AdminComponent},{
      path:'teacher',component:TeacherComponent
    },
    {
      path:'contacts',component:ContactsComponent
    }
  ]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
