import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Theft } from '../models/theft';
import { Accident } from '../models/accident';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-accident-add',
  templateUrl: './accident-add.component.html',
  styleUrls: ['./accident-add.component.css']
})
export class AccidentAddComponent implements OnInit {

  policy_id:string;

accident:FormGroup;
accidents:Accident[];
  constructor(private vs:VehicleService,private fb:FormBuilder) { }
get  f(){
  return this.accident.controls;
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
 this.policy_id=null;
 this.accident=this.fb.group({
  claim_id:[''],
  total_amount:[''],
  accident_type:[''],
  weightage:[''],
  claim_amount:[''],
  status:[''],
  policy_id:[''],
  customer_id:[''],
 });
}



}


