import { Component, OnInit } from '@angular/core';
import { Accident } from '../models/accident';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accident-list',
  templateUrl: './accident-list.component.html',
  styleUrls: ['./accident-list.component.css']
})
export class AccidentListComponent implements OnInit {
accident:Accident=new Accident();
accidents:Accident[];
customer_id:string;message:string;
  constructor(private vs:VehicleService,private router:Router) { }
get cid(){
  return sessionStorage.getItem('cid');
}

  accidentlist(){
    this.vs.accidentlist(this.customer_id)
    .subscribe( data => {   
      if(data==null){
        this.message="No records available"
        this.accidents=null;
        return;
      }     
      this.message=null;
     this.accidents=data;
    });
    }
    ngOnInit() {
      if(sessionStorage.getItem('username')==null){

        this.router.navigate(['']);
      }
      this.customer_id = this.cid;
      this.accidentlist();
  } 

    onSubmit() {
      this.accidentlist();
    }
}
