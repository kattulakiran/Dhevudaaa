import { Component, OnInit } from '@angular/core';
import { Cancel } from '../models/cancel';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-allcancels-list2',
  templateUrl: './allcancels-list2.component.html',
  styleUrls: ['./allcancels-list2.component.css']
})
export class AllcancelsList2Component implements OnInit {
cancel:Cancel=new Cancel();
cancels:Cancel[];
policy_id:string;
vehicle:Vehicle=new Vehicle();
vehicles:Vehicle[];
result:string=null;
  constructor(private vs:VehicleService) { }

  ngOnInit() {

    this.vs.cancelreqpolicy()
    .subscribe( data => {         
      this.vehicles = data;
      
    });

  }

  cancelpolicies(result,i){
    this.result=result;
    this.vs.cancelpolicyStatus(this.vehicles[i].policy_id).subscribe(res=>{});
   
  }



}
