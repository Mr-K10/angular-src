import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  lat: number = 25.2677;
  lng: number = 82.9913;
  zoom: number = 14;

  constructor() { }

  ngOnInit() {
  }

}
