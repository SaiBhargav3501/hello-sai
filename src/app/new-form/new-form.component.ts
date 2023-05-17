import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  data: any[] = [];
  form=new FormGroup({
    topics:new FormArray([])
  });

  addNewTopic(topic:HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl (topic.value))
    topic.value=''
    this.data.push("test " + new Date().getTime());
  }

  removetopic(topic:FormControl){
    let index=this.topics.controls.indexOf(topic);
    this.topics.removeAt(index)
    //console.log(this.form.get('topics'))
  }

   get topics(){
    return this.form.get('topics') as FormArray
   }

   gretVAlueOf(topic:HTMLInputElement){
   let fg= (this.form.get('topics') as FormArray).push(new FormControl (topic.value))
   console.log(this.form.get('topics'))
   
   }
   

}
