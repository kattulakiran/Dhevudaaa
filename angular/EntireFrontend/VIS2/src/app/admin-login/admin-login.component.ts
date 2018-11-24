import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { AdminLogin } from '../models/AdminLogin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
message:string;
  adlogin:AdminLogin=new AdminLogin();

  ngOnInit(){
 
  }
  constructor(private router: Router,private vs:VehicleService) { }

  tryLogin() {
    this.vs.tryLogin(this.adlogin)
      .subscribe(data => {
        if(data=='login successful')
        {
          sessionStorage.setItem('username','admin');
         console.log(data);
          this.router.navigate(['vehiclereg']);
        }
          else{
            this.message="Invalid Credentials";
          }
        },
      );
  }

}
