import { MainadminComponent } from './mainadmin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  {path:'admin',children:[{path:"main-home",component:MainHomeComponent },
  {path:"main-login",component:MainLoginComponent}]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),BrowserModule],
  exports: [RouterModule]
})
export class MainadminRoutingModule { }
