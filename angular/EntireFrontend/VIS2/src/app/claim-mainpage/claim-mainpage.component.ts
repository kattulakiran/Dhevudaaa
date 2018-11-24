import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-claim-mainpage',
  templateUrl: './claim-mainpage.component.html',
  styleUrls: ['./claim-mainpage.component.css']
})
export class ClaimMainpageComponent implements OnInit {

  constructor(private route:Router,private vs:VehicleService) { }

  ngOnInit() {
    if(sessionStorage.getItem('username')==null){

      this.route.navigate(['']);
    }
  }

  accident(){
    this.route.navigate(['accident']);
  }

  theft(){
    this.route.navigate(['theft']);
  }

  accidentlist(){
    this.route.navigate(['accidentlist']);
  }

  theftlist(){
    this.route.navigate(['theftlist']);
  }




  logout(){
    this.vs.loggedInStatus=false;
    console.log(this.vs.loggedInStatus);
    sessionStorage.clear();
    this.route.navigate(['']);
  }




}
