import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VehicleService } from './vehicle.service';

@Injectable({
  providedIn: 'root'
})

export class VerifyGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.vehicle.loggedInStatus){
        this.router.navigate(['']);
      }else
    return this.vehicle.loggedInStatus;
  }
  constructor(private vehicle : VehicleService,private router:Router){
   
  }
}
