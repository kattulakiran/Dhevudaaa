import { Component, OnInit } from '@angular/core';
import { Accident } from '../models/accident';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allclaims-list',
  templateUrl: './allclaims-list.component.html',
  styleUrls: ['./allclaims-list.component.css']
})
export class AllclaimsListComponent implements OnInit {
  accident:Accident=new Accident();
  accidents:Accident[];
  constructor(private vs:VehicleService,private router:Router) { }

  result:string=null;
  claim_id:string;
  ngOnInit() {
    console.log('allclaims');
    if(sessionStorage.getItem('username')==null){

      this.router.navigate(['']);
    }
    this.vs.accidentpolicies()
    .subscribe( data => {        
      this.accidents = data;
      
    });
}

Accidentsubmit(result,i){
  this.result=result;
  this.vs.accidentsetStatus(this.accidents[i].claim_id).subscribe(res=>{
    this.vs.accidentpolicies()
    .subscribe( data => {        
      this.accidents = data;
  
     // this.accidents=data;
      // this.router.navigate(['accidentclaimslist']);
    });
  });
  // this.router.navigate(['accidentclaimslist']);
  this.vs.accidentpolicies()
  .subscribe( data => {        
    this.accidents = data;

   // this.accidents=data;
    // this.router.navigate(['accidentclaimslist']);
  });
 
}

Accidentsubmit2(result,i){
  this.result=result;
  this.vs.accidentsetStatus2(this.accidents[i].claim_id).subscribe(res=>{  this.vs.accidentpolicies()
    .subscribe( data => {        
      this.accidents = data;
  
     // this.accidents=data;
      // this.router.navigate(['accidentclaimslist']);
    });});
 
}

  }


