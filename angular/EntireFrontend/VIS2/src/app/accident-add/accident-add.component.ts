import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Theft } from '../models/theft';
import { Accident } from '../models/accident';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import {Vehicle} from './../models/vehicle'
import { Router } from '@angular/router';
@Component({
  selector: 'app-accident-add',
  templateUrl: './accident-add.component.html',
  styleUrls: ['./accident-add.component.css']
})
export class AccidentAddComponent implements OnInit {

  customer_id:string;
vehicles:any[];message:string;
vehicle:Vehicle;
accident:FormGroup;
accidents:Accident[];
  constructor(private vs:VehicleService,private fb:FormBuilder,private router:Router) { }
get  f(){
  return this.accident.controls;
}
get cid(){
  return sessionStorage.getItem('cid');
}
 saveaccident(){
  if(this.accident.invalid){

    this.message="Please enter valid details"
    return;
  }
  this.vs.saveaccident(this.accident.value)
        .subscribe( data => {
         
        //alert(data);
          this.message=data;
        });

  }
 

accidentcheck(){
 
  this.vs.accidentcheck(this.accident.value)
  .subscribe( data => {        
   
    alert(data);
  });
}

onSubmit() {
  
  
  this.accidentcheck();

}
ngOnInit(){
  if(sessionStorage.getItem('username')==null){

    this.router.navigate(['']);
  }
  this.vs.custpolicies(this.cid)
        .subscribe( data => {        
          if(data=='custId not found'){
            alert("Invalid Customer Id");
          }else{
      this.vehicles = data;
          }
      },);
 this.accident=this.fb.group({
  claim_id:[''],
  total_amount:[''],
  accident_type:[''],
  weightage:[''],
  claim_amount:[''],
  status:[''],
  policy_id:[''],
  customer_id:this.cid,
 });
}



}


