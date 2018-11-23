import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Theft } from '../models/theft';
import { Accident } from '../models/accident';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import {Vehicle} from './../models/vehicle'
@Component({
  selector: 'app-accident-add',
  templateUrl: './accident-add.component.html',
  styleUrls: ['./accident-add.component.css']
})
export class AccidentAddComponent implements OnInit {

  customer_id:string;
vehicles:any[];
vehicle:Vehicle;
accident:FormGroup;
accidents:Accident[];
  constructor(private vs:VehicleService,private fb:FormBuilder) { }
get  f(){
  return this.accident.controls;
}
get cid(){
  return sessionStorage.getItem('cid');
}
 saveaccident(){
   
  this.vs.saveaccident(this.accident.value)
        .subscribe( data => {
          if(this.accident.invalid){

            return;
          }
        alert(data);
          
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


