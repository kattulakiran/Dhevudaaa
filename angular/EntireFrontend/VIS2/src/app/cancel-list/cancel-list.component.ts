import { Component, OnInit } from '@angular/core';
import { Cancel } from '../models/cancel';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-list',
  templateUrl: './cancel-list.component.html',
  styleUrls: ['./cancel-list.component.css']
})
export class CancelListComponent implements OnInit {
  customer_id:string;
  cancel:Cancel=new Cancel();
  cancels:Cancel[];
  constructor(private vs:VehicleService,private router:Router) {} 
get cid(){
  return sessionStorage.getItem('cid');
}
  cancellist(){
    this.vs.cancellist(this.cid)
    .subscribe( data => {        
    this.cancels=data;
 
    });
    }


  onSubmit() {
    this.cancellist();
  }

  ngOnInit() {
    if(sessionStorage.getItem('username')==null){

      this.router.navigate(['']);
    }
    this.cancellist();
  }

}
