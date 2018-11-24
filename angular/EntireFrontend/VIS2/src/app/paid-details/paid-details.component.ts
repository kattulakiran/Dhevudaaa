import { Component, OnInit } from '@angular/core';
import { Directpay } from '../models/directpay';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paid-details',
  templateUrl: './paid-details.component.html',
  styleUrls: ['./paid-details.component.css']
})
export class PaidDetailsComponent implements OnInit {
directpay:Directpay=new Directpay();
  directpays:Directpay[];

  
  vehicles: any;
  constructor(private route:Router,private vs:VehicleService) { }

  ngOnInit( ) {
    if(sessionStorage.getItem('username')==null){

      this.route.navigate(['']);
    }
    this.directpay.policy_id=null;
   
    this.vs.custpolicies(this.cid)
        .subscribe( data => {        
        
      this.vehicles = data;
          }
      
    
  );
  }
get cid(){
  return sessionStorage.getItem('cid');
}


private paiddetails(){
this.vs.paiddetails(this.directpay.policy_id)
.subscribe( data => {        
  this.directpays = data;
});
}
onSubmit() {
  this.paiddetails();
}

}