import { Component, OnInit } from '@angular/core';
import { Directpay } from '../models/directpay';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../models/vehicle';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-direct-pay',
  templateUrl: './direct-pay.component.html',
  styleUrls: ['./direct-pay.component.css']
})
export class DirectPayComponent{
  directpay:FormGroup;
  submitted=false;
  vehicles: any;message:string;
  vehicle:Vehicle=new Vehicle();
  
  constructor(private vs:VehicleService,private router:Router,private fb:FormBuilder) { }
get f(){
  return this.directpay.controls;
}
  
  ngOnInit( ) {

  


    if(sessionStorage.getItem('username')==null){

      this.router.navigate(['']);
    }
    
    this.directpay=this.fb.group({
      policy_id:[''],
     
     pay_mode:[''],
      
      full_name:[''],card_number:[''],
      expiration_month:[''],
      expiration_year:[''],
      cvv:[''],username:[''],password:[''],
    });
    
    this.vs.custpolicies(this.cid)
        .subscribe( data => {        
          if(data=='custId not found'){
            alert("Invalid Customer Id");
          }else{
      this.vehicles = data;
      //console.log(this.directpay.value.pay_mode);
          }
      },
    
  );




  }
get cid(){
  return sessionStorage.getItem('cid');
}


 direct(){
   this.submitted=true;
   if(this.directpay.invalid){
console.log(this.directpay.value.pay_mode);
    this.message='please enter valid fields';return;
    
   }else{
    this.vs.direct(this.directpay.value)
    .subscribe( data => {
     
     //alert(data);
     this.message=data;
    
    });
    

   }
 
 }



 debit(){
  this.directpay.value.pay_mode="Debit Card";
 this.directpay.patchValue({
   pay_mode:"Debit Card"
 })
  }
  
  credit(){
  this.directpay.value.pay_mode="Credit Card";
  this.directpay.patchValue({
    pay_mode:"Credit Card"
  })
  }
  
  net(){
  this.directpay.value.pay_mode="Net Banking";
  this.directpay.patchValue({
    pay_mode:"Net Banking"
  })
  }


}


