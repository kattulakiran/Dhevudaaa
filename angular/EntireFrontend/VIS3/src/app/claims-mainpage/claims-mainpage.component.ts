import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claims-mainpage',
  templateUrl: './claims-mainpage.component.html',
  styleUrls: ['./claims-mainpage.component.css']
})
export class ClaimsMainpageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
 




  accidentclaimslist(){
    this.route.navigate(['accidentclaimslist']);
  }

  theftclaimslist(){
    this.route.navigate(['theftclaimslist']);
  }


}
