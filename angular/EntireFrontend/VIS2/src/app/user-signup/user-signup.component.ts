import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Customer } from '../models/customer';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit{

customer:FormGroup;
submit=false;
  message: string;
  message1:string;


 get f(){
   
  return this.customer.controls;
}
  constructor(private route:Router,private vs:VehicleService,private fb :FormBuilder) { }


userlogin(){
  this.submit=true;
  
  if(this.customer.invalid){
    this.message='please enter valid details';
    return;
  }
this.vs.userlogin(this.customer.value)
.subscribe( data => {
 
  if(data=="Username already exists please try another Username")
  {
    return this.message=data;
  }else{
   
    this.message=data;
    
    
  }

});
}


 ngOnInit(){

   this.customer=this.fb.group(
     {
       username :['',Validators.required],
     password:['',Validators.required],
     country:['',Validators.required],
     state:['',Validators.required],
    
    address:['',Validators.required],
    city:['',Validators.required],
    pincode:['',Validators.required],
    email_id:['',Validators.required],
    gender:['',Validators.required],
    contact_number:['',Validators.required],
    date_of_birth:['',Validators.required]

  
  });
  
 }

}

