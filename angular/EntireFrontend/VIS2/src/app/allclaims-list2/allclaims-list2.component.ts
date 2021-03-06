import { Component, OnInit } from '@angular/core';
import { Theft } from '../models/theft';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allclaims-list2',
  templateUrl: './allclaims-list2.component.html',
  styleUrls: ['./allclaims-list2.component.css']
})
export class AllclaimsList2Component implements OnInit {
theft:Theft=new Theft();
thefts:Theft[];
  message: string;
  constructor(private vs:VehicleService,private router:Router) { }


result:string=null;
claim_id:string;
  ngOnInit() {
    if(sessionStorage.getItem('username')==null){

      this.router.navigate(['']);
    }
    this.vs.theftpolicies()
    .subscribe( data => {   
      if(data==null)     {
        this.message="No records available";
        this.thefts=null;
        return;
      }
      this.message=null;
      this.thefts = data;
      
    });
}
submit(result,i){
  this.result=result;
  this.vs.setStatus(this.thefts[i].claim_id).subscribe(res=>{
    this.vs.theftpolicies()
    .subscribe( data => {        
      this.thefts = data;
      
    });
  });
 
}

submit2(result,i){
  this.result=result;
  this.vs.setStatus2(this.thefts[i].claim_id).subscribe(res=>{
    this.vs.theftpolicies()
    .subscribe( data => {        
      this.thefts = data;
      
    });
  });
 
}


  }


