import { Component, OnInit } from '@angular/core';
import { Directpay } from '../models/directpay';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-direct-pay',
  templateUrl: './direct-pay.component.html',
  styleUrls: ['./direct-pay.component.css']
})
export class DirectPayComponent{
  directpay:Directpay=new Directpay();
  vehicles: any;
  vehicle:Vehicle=new Vehicle();
  
  constructor(private vs:VehicleService) { }

  
  ngOnInit( ) {
    this.directpay.policy_id=null;
    console.log(this.cid)
    this.vs.custpolicies(this.cid)
        .subscribe( data => {        
          if(data=='custId not found'){
            alert("Invalid Customer Id");
          }else{
      this.vehicles = data;
          }
      },
    
  );
  }
get cid(){
  return sessionStorage.getItem('cid');
}


 direct(){
   this.vs.direct(this.directpay)
   .subscribe( data => {
    alert(data);
   });
 }


}


