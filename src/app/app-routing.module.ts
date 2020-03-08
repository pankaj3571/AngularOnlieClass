import {NgModule} from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes=[
  {path:"",redirectTo:'login',pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}


/*
Routes is used to configure our route path ;
path is used for particular route name for the particular component
in @ngModule we imports our RouterModule.forRoot(routes) now when we load our app then the route will be activate
export the class AppRoutinModule

import AppRoutingModule class as a module in app.module.ts

*/
