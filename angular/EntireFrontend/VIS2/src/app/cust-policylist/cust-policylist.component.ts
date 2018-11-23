import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-cust-policylist',
  templateUrl: './cust-policylist.component.html',
  styleUrls: ['./cust-policylist.component.css']
})
export class CustPolicylistComponent implements OnInit {

  customer_id:string;
  vehicle:Vehicle=new Vehicle();
  vehicles:Vehicle[];

  constructor(private route:Router,private vs:VehicleService) { }

  ngOnInit( ) {
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
  private custpolicies(){
  
  
 }

  onSubmit() {
    this.custpolicies();
  }

}
