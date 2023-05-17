import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

const routes: Routes = [
  {path:"user",children:[{path:"user-login",  component:UserLoginComponent },
  {path:"user-logout",component:UserLogoutComponent}]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),BrowserModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
