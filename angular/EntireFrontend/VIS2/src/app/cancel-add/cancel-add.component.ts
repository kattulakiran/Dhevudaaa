import { Component, OnInit } from '@angular/core';
import { Cancel } from '../models/cancel';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-cancel-add',
  templateUrl: './cancel-add.component.html',
  styleUrls: ['./cancel-add.component.css']
})
export class CancelAddComponent implements OnInit{
cancel:Cancel=new Cancel();
vehicles:any[];
ngOnInit(){
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
  constructor(private vs:VehicleService) { }

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
          alert(data);
        });
  
  }
  
}
