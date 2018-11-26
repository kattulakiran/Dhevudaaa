import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title = 'Vehicle Insurance System';
  constructor(private alerts:AlertsService){}
  ngOnInit(){
    
  }
}
