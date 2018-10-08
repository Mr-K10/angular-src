import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  value: String;
  constructor() { }

  ngOnInit() {
  }

  change(val:String){
  	this.value = val;
  }

}
