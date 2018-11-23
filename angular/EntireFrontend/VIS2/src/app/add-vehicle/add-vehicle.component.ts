import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';
import { Vehicle } from '../models/vehicle';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit{
  vehicle:FormGroup;
ngOnInit(){
  this.vehicle=this.fb.group({
    policy_id: [] ,
    vehicle_owner:[''],
    vehicle_state:[''],
    vehicle_type:[''],
    vehicle_class:[''],
    manufacturer:[''],
    model:[''],
    engine_number:[''],
    make_year:[''],
    registering_location:[''],
    date_of_purchase:[''],
    price:[''],
    premium_amount:[''],
    customer_id:[''],
  });
}
  constructor(private router: Router,private vs:VehicleService,private fb:FormBuilder) { }
get f(){
  return this.vehicle.controls;
}
  createPolicy() {

    if(this.vehicle.invalid){
      return;

    }
    this.vs.createPolicy(this.vehicle.value)
        .subscribe( data => {
        alert(data);
          
        });

  };

}
