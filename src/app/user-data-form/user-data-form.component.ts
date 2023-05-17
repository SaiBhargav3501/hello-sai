



import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DummyDataForm } from './user-dummydata';

 


@Component({
  selector: 'user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})

export class UserDataFormComponent implements OnInit {

  dummydataobj:any;
  DummyDataForm:DummyDataForm[]=[]
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  form = new FormGroup({
    firstname: new FormControl("", Validators.required),
    "lastname": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)]),
    "DOB": new FormControl("", Validators.required),
    status: new FormControl(false),
    "id": new FormControl("")
  });
    
   submitted=false
   
  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    console.log(this.form.valueChanges.subscribe(x => {
      console.log('form value changed')
      console.log(x)
  }))

    console.log(this.form)
    
    this.initialData("SAI","Bhargav","bhargav@123.com","2000-12-05",true,"245816578645748")
    const val=this.dummydataobj
    let otherval=this.formBuilder.group(val)
    console.log(val)
    let op:string=otherval.value['firstname'] as string

    console.log(op)
    console.log(this.firstname)
    this.firstname
    
    this.form.controls['firstname'].setValue(op);
    this.form.controls['lastname'].setValue(otherval.value['lastname'] as string);
    this.form.controls['email'].setValue(otherval.value['email'] as string);
    this.form.controls['DOB'].setValue(otherval.value['DOB'] as string);
    this.form.controls['status'].setValue(otherval.value['status'] as boolean);
  
    //  return this.formBuilder.group(
    //    new FormGroup({
    //     firstname: new FormControl(otherval.value['firstname'] as string),
    //     "lastname": new FormControl(otherval.value['lastname'] as string),
    //     "email": new FormControl(otherval.value['email'] as string),
    //     "DOB": new FormControl(otherval.value['DOB'] as string),
    //     status: new FormControl(otherval.value['status'] as boolean),
    //     "id": new FormControl(otherval.value['id'] as string),
    //   })
     


    // )

    

    
    // this.form=this.FormBuilder.Validators
  

    //this.form.value.DOB=this.initialData("SAI","Bhargav","bhargav@123.com","2000-12-05",true,"245816578645748")

  //  this.form.patchValue({
  //   firstname:this.DummyDataForm[0].firstname,
  //   DOB:this.DummyDataForm[0].DOB,
  //   lastname:this.DummyDataForm[0].lastname,
  // email:this.DummyDataForm[0].email,
  // id:this.DummyDataForm[0].id,
  // status:this.DummyDataForm[0].status
  // })
  }

  initialData(firstname:string,lastname:string,email:string,DOB:string,status:boolean,id:string){
    let dummyData:DummyDataForm=new DummyDataForm() 
    dummyData.firstname=firstname;
    dummyData.lastname=lastname;
    dummyData.email=email;
    dummyData.DOB=DOB;
    dummyData.id=id;
    dummyData.status=status;
    this.DummyDataForm.push(dummyData)
    this.dummydataobj=dummyData
  }
  //this.form.value.firstname=this.DummyDataForm[0].firstname
 

  data: any[] = [];
  id: string = "";
  inndexNumber:number= -1

  get firstname() {
    return this.form.get('firstname')

  }
  get email() {
    return this.form.get('email')

  }
  get lastname() {
    return this.form.get('lastname')
  }

  get DOB() {
    return this.form.get('DOB')

  }

  get status() {
    return this.form.get('status')
  }

  // adding data into the table
  addthedata() {
    if (this.inndexNumber<=-1){
      let dataval = (this.form.value)
    if (dataval.status==null ){
      dataval.status=false
    }
    this.id = new Date().getTime().toLocaleString()
    dataval.id = this.id
    
    let newval = dataval || JSON
    if (this.form.invalid) {
   
      this.validateAllFormFields(this.form);
        
      
      return;
    }
    else {

      this.data.push(newval)
      
  
      this.form.reset()
      this.form.value.status=false
    
    }
    console.log(this.submitted)

    }
    else{
     
      let dataval = (this.form.value)
      
      console.log(this.submitted)
      this.submitted=false
      this.form.reset()
      this.form.value.status=false
      let initialData=(this.data[this.inndexNumber])
      initialData.firstname=dataval.firstname
      initialData.lastname=dataval.lastname
      initialData.status=dataval.status
      initialData.DOB=dataval.DOB
      initialData.email=dataval.email

      this.data.splice(this.inndexNumber,1,initialData)

      console.log(initialData)
      this.inndexNumber=-1
    }
  }
  // Delete Functionality
  onClickdelete(id: string) {
    let index = this.data.findIndex((each) => {
      return (each.id == id)
    })
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

// validating inputs after submitting
  validateAllFormFields(formGroup: FormGroup) {   
    console.log(Object.keys(formGroup.controls))  
    Object.keys(formGroup.controls).forEach(each=>{
      let eachKey=(this.form.get(each))
      eachKey?.markAsTouched({onlySelf:true})
      
    })
  }
  // Edit Functionality
  onClickUpdate(id: string){
    let index = this.data.findIndex((each) => {
      return (each.id == id)
    })
    let editData=(this.data[index])
    this.form.setValue({
      firstname:editData.firstname,
      lastname:editData.lastname,
      email:editData.email,
      DOB:editData.DOB,
      status:editData.status,
      id:editData.id
    })
    this.inndexNumber=index
    //console.log(index)
    // this.onClickdelete(editData)
    // this.submitted=true
    //console.log(this.form.value)
  }


  dummydataGroup(){
    const val=this.dummydataobj
    
    
    //this.form.value as object;this.formBuilder.group(val).value as object
    //this.form.value as any = this.formBuilder.group(val).value
    // this.formBuilder.group(this.form.value.firstname=otherval.value['firstname'] as string)
   let otherval=this.formBuilder.group(val)
  let op:string=otherval.value['firstname'] as string
   //console.log(otherval.value)

  return op
  
  //  this.form.value=otherval.value['firstname']
  // console.log(this.form.value.firstname)=(otherval.value['firstname'])
  // this.form.value = this.formBuilder.group(this.dummydataobj());
  // this.form.value = this.formBuilder.group(thread).value;
    
    
  }

 
 
}
