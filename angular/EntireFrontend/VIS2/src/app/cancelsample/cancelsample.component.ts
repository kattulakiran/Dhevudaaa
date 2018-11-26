import { Component, OnInit, Input } from '@angular/core';
import { Cancel } from '../models/cancel';

@Component({
  selector: 'app-cancelsample',
  templateUrl: './cancelsample.component.html',
  styleUrls: ['./cancelsample.component.css']
})
export class CancelsampleComponent implements OnInit {

  constructor() { }
  @Input()
  cancel:Cancel;
  ngOnInit() {
  }

}
