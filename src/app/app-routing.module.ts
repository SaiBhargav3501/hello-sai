import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainadminComponent} from './modular-root/mainadmin/mainadmin.component'
import { MainadminModule } from './modular-root/mainadmin/mainadmin.module';
import { UserComponent } from './child-route/user/user.component';



@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
