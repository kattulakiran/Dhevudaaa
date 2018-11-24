import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-cancel-mainpage',
  templateUrl: './cancel-mainpage.component.html',
  styleUrls: ['./cancel-mainpage.component.css']
})
export class CancelMainpageComponent implements OnInit {

  constructor(private route:Router,private vs:VehicleService) { }

  ngOnInit() {
    if(sessionStorage.getItem('username')==null){

      this.route.navigate(['']);
    }
  }

  cancel(){
    this.route.navigate(['addcancel']);
  }

  cancellist(){
    this.route.navigate(['cancellist']);
  }


  logout(){
    this.vs.loggedInStatus=false;
    console.log(this.vs.loggedInStatus);
    sessionStorage.clear();
    this.route.navigate(['']);
  }
 
}
