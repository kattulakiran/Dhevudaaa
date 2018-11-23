import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
message:string;
  customer:Customer=new Customer();
  
  constructor(private route:Router,private vs:VehicleService) { }


signup(){
  this.route.navigate(['signup']);
}

login(){
     this.vs.login(this.customer)
      .subscribe((data:Customer) => {
        if(data)
        {
         sessionStorage.setItem('cid',<string>data.customer_id);
         console.log('login :'+sessionStorage.getItem('cid'))
          this.route.navigate(['usermain']);}
          else{
           this.message="Invalid Credentials";

         
          }
        },
      );
}


  ngOnInit() {
  }

}
