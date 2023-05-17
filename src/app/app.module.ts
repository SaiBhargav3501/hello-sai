import { HomeComponent } from './Routing/home/home.component';
import { UserComponent } from './child-route/user/user.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './new-Course.component';
import { saiServicesBhargav } from './serviceCourses.service';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewFormComponent } from './new-form/new-form.component';
import{NotFoundComponent} from './Routing/not-found/not-found.component'
import { UserDataFormComponent } from './user-data-form/user-data-form.component';
import { PostDataComponent } from './post-data/post-data.component';
import { ContentChildComponent } from './content-child/content-child.component';

import { AboutComponent } from './Routing/about/about.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { LoggingInterceptor } from './post-data/logging.interceptor';
import { AdminformComponent } from './lazyLoading/adminform/adminform.component';
import { CompanyformComponent } from './lazyLoading/companyform/companyform.component';

import { UserModule } from './child-route/user/user.module';
import { MainadminModule } from './modular-root/mainadmin/mainadmin.module';
import {MainadminComponent} from './modular-root/mainadmin/mainadmin.component'
import {MainadminRoutingModule} from './modular-root/mainadmin/mainadmin-routing.module'
import { UserRoutingModule } from './child-route/user/user-routing.module';
import { allPageServices } from './all-page.services';
import { MainHomeComponent } from './modular-root/mainadmin/main-home/main-home.component';
import { AuthService } from './Auth.service';
import { AddContactComponent } from './Routing/contact/add-contact/add-contact.component';
import { DetailsComponent } from './Routing/details/details.component';
import { CanDeactivateservice } from './page-Deactivate.service';
import { ResolveGuard } from './all-page-resolve.service';
import { SupportContactComponent } from './Routing/support-contact/support-contact.component';
import { allSupportService } from './Routing/support-contact/support.service';
 const appRoute:Routes=[
  
  
  {path: 'home', component:HomeComponent},

  {path:'support', component:SupportContactComponent,resolve:{
    alldata:ResolveGuard
  }},
 {path: 'about', component:AboutComponent},
   {path: 'contact', component:ContactComponent},
  {path:'contact',canActivateChild:[allPageServices],children:[{path:'addcontact',component:AddContactComponent}]},
  {path:'details',component:DetailsComponent,canDeactivate:[CanDeactivateservice] }
  
]
  // {path:'**', component :NotFoundComponent}
  // ,{path:'./', component :ContactFormComponent},
  // {path:'./sign', component :SignupFormComponent},
  // {path:'**', component :NotFoundComponent}

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ContactFormComponent,
    SignupFormComponent,
    SignupFormComponent,
    ContactFormComponent,
    NewFormComponent,
    UserDataFormComponent,
    PostDataComponent,
    ContentChildComponent,
HomeComponent,
    AboutComponent,
    ContactComponent,
    AdminformComponent,
    CompanyformComponent,
    MainadminComponent,
    AddContactComponent,
    DetailsComponent,
    
    SupportContactComponent
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MainadminModule,
    UserModule,
    MainadminRoutingModule, 
    UserRoutingModule ,
    RouterModule.forRoot(appRoute)
  ],
  providers: [saiServicesBhargav,
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true},allPageServices,AuthService,CanDeactivateservice,allSupportService,ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
