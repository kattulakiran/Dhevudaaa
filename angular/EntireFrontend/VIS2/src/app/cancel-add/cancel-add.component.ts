import { Component, OnInit } from '@angular/core';
import { Cancel } from '../models/cancel';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-add',
  templateUrl: './cancel-add.component.html',
  styleUrls: ['./cancel-add.component.css']
})
export class CancelAddComponent implements OnInit{
cancel:Cancel=new Cancel();message:string;
vehicles:any[];
ngOnInit(){
  this.message="Please enter valid details"
  if(sessionStorage.getItem('username')==null){

    this.router.navigate(['']);
  }
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
  constructor(private vs:VehicleService,private router:Router) { }

  cancelcheck(){
    this.vs.cancelcheck(this.cancel)
    .subscribe( data => {        
      alert(data);
    });
  }

get cid(){
  return sessionStorage.getItem('cid');
}
  savecancel() {
    this.cancel.customer_id=this.cid;
    this.vs.savecancel(this.cancel)
        .subscribe( data => {
          //alert(data);
          this.message=data;
        });
  
  }
  
}
