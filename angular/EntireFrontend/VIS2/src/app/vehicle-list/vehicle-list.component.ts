import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  
searchterm:string;
    vehicles:Vehicle[];
  message: string;
    
    
      constructor(private router: Router, private vs: VehicleService) { }
    
      ngOnInit() {
    if(sessionStorage.getItem('username')==null){
      this.router.navigate(['']);
    }
        this.vs.getPolicies()
          .subscribe( data => {    
            if(data==null)    {
              this.message="No records available";
              this.vehicles=null;
              return;
            }
            this.message=null;
            this.vehicles = data;
          });
      };
    
    search(){
 
      this.vs.search(this.searchterm)
      .subscribe( data => {        
        if(data==null){
          this.message="No records available";
          this.vehicles=null;
          return;
        }else{
          this.message=null;
    this.vehicles = data;

        }
        


    });
    
      }
 

    }