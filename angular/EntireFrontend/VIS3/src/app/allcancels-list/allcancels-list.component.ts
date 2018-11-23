import { Component, OnInit } from '@angular/core';
import { Cancel } from '../models/cancel';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-allcancels-list',
  templateUrl: './allcancels-list.component.html',
  styleUrls: ['./allcancels-list.component.css']
})
export class AllcancelsListComponent implements OnInit {
cancel:Cancel=new Cancel();
cancels:Cancel[];
cancel_id:string;
  result:string=null;
  constructor(private vs:VehicleService) { }

  ngOnInit() {

    this.vs.cancelpolicy()
    .subscribe( data => {        
      this.cancels = data;
      
    });


  }

  cancelrequests(result,i){
    this.result=result;
    this.vs.cancelreqsetStatus(this.cancels[i].cancel_id).subscribe(res=>{});
   
  }


}
