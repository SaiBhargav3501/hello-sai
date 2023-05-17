import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainadminRoutingModule } from './mainadmin-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { MainadminComponent } from './mainadmin.component';
import { RouterModule, Routes } from '@angular/router';
// const routes: Routes = [
//   {
//     path: 'admin',
//     children: [
//       { path: '/main-home', component: MainLoginComponent },
//       { path: '/main-login', component: MainHomeComponent}
//     ]
//   }
// ];      

@NgModule({
  declarations: [
    MainHomeComponent,
    MainLoginComponent,
    
    
  ],
  imports: [
    CommonModule,
   
    BrowserModule,
    // [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class MainadminModule { }
