import { Component, OnInit } from '@angular/core';
import { Theft } from '../models/theft';
import { VehicleService } from '../vehicle.service';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-theft-add',
  templateUrl: './theft-add.component.html',
  styleUrls: ['./theft-add.component.css']
})
export class TheftAddComponent implements OnInit {
policy_id:string;
  theft:FormGroup;
  constructor(private vs:VehicleService,private fb:FormBuilder) { }
get f(){
  return this.theft.controls;
}
  savetheft(){
    this.vs.savetheft(this.theft.value)
          .subscribe( data => {
            if(this.theft.invalid){

              return;
            }
          alert(data);
            
          });
  
    }


  theftcheck(){
    this.vs.theftcheck(this.theft.value)
    .subscribe( data => {        
      alert(data);
    });
  }

  onSubmit() {
    this.theftcheck();
  }
  ngOnInit(){
   this.policy_id=null;
   this.theft=this.fb.group({
    claim_id:[''],
    total_amount:[''],
    theft_date:[''],
    complaint_date:[''],
    fir_number:[''],
    claim_amount:[''],
    status:[''],
    customer_id:[''],
    policy_id:[''],
   });
  }
}
