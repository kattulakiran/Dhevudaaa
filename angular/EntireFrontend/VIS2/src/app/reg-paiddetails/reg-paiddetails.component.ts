import { Component, OnInit } from '@angular/core';
import { Registerpay } from '../models/registerpay';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-reg-paiddetails',
  templateUrl: './reg-paiddetails.component.html',
  styleUrls: ['./reg-paiddetails.component.css']
})
export class RegPaiddetailsComponent implements OnInit {
  regpay:Registerpay=new Registerpay();
  regpays:Registerpay[];
  policy_id:string;
  vehicles: any;
  message: string;
  constructor(private route:Router,private vs:VehicleService) { }

  ngOnInit( ) {
    if(sessionStorage.getItem('username')==null){

      this.route.navigate(['']);
    }
    this.regpay.policy_id=null;
   
    this.vs.custpolicies(this.cid)
        .subscribe( data => {        
        
      this.vehicles = data;
          }
      
    
  );
  }
get cid(){
  return sessionStorage.getItem('cid');
}


  private regpaiddetails(){
    this.vs.regpaiddetails(this.regpay.policy_id)
    .subscribe( data => {   
      if(data==null){
        this.message="No records available";
        this.regpays=null;
        return;
      } 
  this.message=null;
      this.regpays = data;
    });
    }

    onSubmit() {
      this.regpaiddetails();
    }


}
