import { Component, OnInit } from '@angular/core';
import { Registerpay } from '../models/registerpay';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-pay',
  templateUrl: './registered-pay.component.html',
  styleUrls: ['./registered-pay.component.css']
})
export class RegisteredPayComponent  {




  regpay:Registerpay=new Registerpay();
  vehicles: any;
  message: string;

  constructor(private vs:VehicleService,private router:Router) { }


  ngOnInit( ) {
    if(sessionStorage.getItem('username')==null){

      this.router.navigate(['']);
    }
    this.regpay.policy_id=null;
    console.log(this.cid)
    this.vs.custpolicies(this.cid)
        .subscribe( data => {        
        
      this.vehicles = data;
          }
      
    
  );
  }
get cid(){
  return sessionStorage.getItem('cid');
}



 registerpay(){
  this.vs.registerpay(this.regpay)
  .subscribe( data => {        
    
    this.message=data;   
    
  });
}
    
makePayment() {
  this.vs.makePayment(this.regpay)
      .subscribe( data => {
      
      
        this.message=data;
     
     
      });

}




}
