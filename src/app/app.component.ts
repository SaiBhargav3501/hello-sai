import { Component } from '@angular/core';
import { AuthService } from './Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private authervice:AuthService){

   }
 login(){
  this.authervice.login()
 }

 logout(){
  this.authervice.logout()
 }
 
}
