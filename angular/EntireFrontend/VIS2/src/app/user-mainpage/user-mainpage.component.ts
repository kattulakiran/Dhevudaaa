import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-user-mainpage',
  templateUrl: './user-mainpage.component.html',
  styleUrls: ['./user-mainpage.component.css']
})
export class UserMainpageComponent implements OnInit {
customer : Customer=new Customer();
  constructor(private route:Router,private vs:VehicleService) { }

directpay(){
this.route.navigate(['directpay']);
}

registeredpay(){
this.route.navigate(['registeredpay']);
}

paiddetails(){
this.route.navigate(['paiddetails']);
}

regpaiddetails(){
  this.route.navigate(['regpaydetails']);
}

policylist(){
  this.route.navigate(['custpolicylist']);
}


logout(){
  this.vs.loggedInStatus=false;
  console.log(this.vs.loggedInStatus);
  sessionStorage.clear();
  this.route.navigate(['']);
}


  ngOnInit() {
    if(sessionStorage.getItem('username')==null){

      this.route.navigate(['']);
    }
  }

}
