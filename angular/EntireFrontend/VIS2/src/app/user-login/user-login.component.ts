import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { VehicleService } from '../vehicle.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
message:string;
  customer:Customer=new Customer();
  username:string ;
  constructor(private route:Router,private vs:VehicleService,private alerts:AlertsService) { }

remember(){
  localStorage.setItem('username',<string>this.customer.username);  
  //console.log(localStorage.getItem('username'));
  localStorage.setItem('password',<string>this.customer.password);  
}
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
    
   this.customer.username=localStorage.getItem('username');
   this.customer.password=localStorage.getItem('password');
   
    
  }

}
