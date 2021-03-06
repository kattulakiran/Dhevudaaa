import { Component, OnInit } from '@angular/core';
import { Theft } from '../models/theft';
import { VehicleService } from '../vehicle.service';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-theft-add',
  templateUrl: './theft-add.component.html',
  styleUrls: ['./theft-add.component.css']
})
export class TheftAddComponent implements OnInit {
policy_id:string;message:string;
  theft:FormGroup;vehicles:any[];
  constructor(private vs:VehicleService,private router:Router,private fb:FormBuilder) { }
get f(){
  return this.theft.controls;
}
get cid(){
  return sessionStorage.getItem('cid');
}
  savetheft(){
    if(this.theft.invalid){

      this.message="Please enter valid details"
      return;
    }
    this.vs.savetheft(this.theft.value)
          .subscribe( data => {
           
         // alert(data);
            this.message=data;
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
   this.theft=this.fb.group({
    claim_id:[''],
    total_amount:[''],
    theft_date:[''],
    complaint_date:[''],
    fir_number:[''],
    claim_amount:[''],
    status:[''],
    customer_id:[this.cid],
    policy_id:[''],
   });
  }
}
