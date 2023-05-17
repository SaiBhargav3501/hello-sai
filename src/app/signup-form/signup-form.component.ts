import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { UserValidator } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  
  form=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(6),UserValidator.cannotCaontainSpace]),
    password:new FormControl("",Validators.required)
  });
  

  get username(){
    return this.form.get('username')
  }

  Login(){
    this.form.setErrors({
      invalidLogin:true
    })
  }

  pageSubmit() {
    debugger;
  }
  /*constructor(){
    console.log(this.form.username.vlaue())

  }*/

}
