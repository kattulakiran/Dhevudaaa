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
        if(data!=null)
        {
          this.vs.loggedInStatus=true;
          sessionStorage.setItem('username',<string>data.username);
          sessionStorage.setItem('password',<string>data.password);
         sessionStorage.setItem('cid',<string>data.customer_id);
         console.log('login :'+sessionStorage.getItem('cid'))
         console.log(this.vs.loggedInStatus);
          this.route.navigate(['usermain']);}
          else{
            this.vs.loggedInStatus=false;
            console.log(this.vs.loggedInStatus);
           this.message="Invalid Credentials";

         
          }
        },
      );
}


  ngOnInit() {
  }

}
