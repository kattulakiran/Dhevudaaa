import { Component, OnInit } from '@angular/core';
import { Theft } from '../models/theft';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theft-list',
  templateUrl: './theft-list.component.html',
  styleUrls: ['./theft-list.component.css']
})
export class TheftListComponent implements OnInit{
theft:Theft=new Theft();
thefts:Theft[];
customer_id:string;message:string;
  constructor(private vs:VehicleService,private router:Router) { }

  theftlist(){
    this.vs.theftlist(this.cid)
    .subscribe( data => {   

      if(data==null){
        this.message="No records available";
        this.thefts=null;
        return;
      }
      this.message=null;
    this.thefts=data;
 
    });
    }
get cid(){
  return sessionStorage.getItem('cid');
}
    ngOnInit() {
      if(sessionStorage.getItem('username')==null){

        this.router.navigate(['']);
      }
      
      this.theftlist();
     
  }
  onSubmit() {
    this.theftlist();
  }

}
