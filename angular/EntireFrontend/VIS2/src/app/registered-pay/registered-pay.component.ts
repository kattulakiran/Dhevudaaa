import { Component, OnInit } from '@angular/core';
import { Registerpay } from '../models/registerpay';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registered-pay',
  templateUrl: './registered-pay.component.html',
  styleUrls: ['./registered-pay.component.css']
})
export class RegisteredPayComponent  {




  regpay:FormGroup;
  vehicles: any;
  message: string;
  message1:string;

  constructor(private vs:VehicleService,private router:Router,private fb:FormBuilder) { }

get f(){
  return this.regpay.controls;
}
  ngOnInit( ) {
    if(sessionStorage.getItem('username')==null){

      this.router.navigate(['']);
    }
    this.regpay=this.fb.group({
      policy_id:[''],
      premium_amount:[''],
      due_date:[''],
      paid_date:[''],
      payment_mode:[''],
      pay_amount:[''],
      payment_id:[''],
  
      full_name:[''],
      card_number:[''],
      expiration_month:[''],
      expiration_year:[''],
      cvv:['']
    });
    this.regpay.value.policy_id=null;
    this.regpay.value.payment_mode="Debit Card";
    this.vs.custpolicies(this.cid)
        .subscribe( data => {        
        
      this.vehicles = data;
          }
      
    
  );
  }
get cid(){
  return sessionStorage.getItem('cid');
}



 registerpay(){
  this.vs.registerpay(this.regpay.value)
  .subscribe( data => {        
    
    this.message=data;   
    
  });
}
    
makePayment() {
  if(this.regpay.invalid){
    this.message1="Please enter valid details";
    return;
  }
  this.vs.makePayment(this.regpay.value)
      .subscribe( data => {
      
        this.message=null;
        this.message1=data;
     
     
      });

}

debit(){
  this.regpay.value.payment_mode="Debit Card";
  this.regpay.patchValue({
    payment_mode:"Debit Card"
  })
  }

  
  credit(){
  this.regpay.value.payment_mode="Credit Card";
  this.regpay.patchValue({
    payment_mode:"Debit Card"
  })
  }
  
  net(){
  this.regpay.value.payment_mode="Net Banking";
  this.regpay.patchValue({
    payment_mode:"Debit Card"
  })
  }



}
