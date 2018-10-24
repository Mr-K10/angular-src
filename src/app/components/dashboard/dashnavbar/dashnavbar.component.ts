import { Component, OnInit } from '@angular/core';
import { CompCommunicationService } from '../../../services/comp-communication.service';
import { GeoLocationService } from '../../../services/geo-location.service';

@Component({
  selector: 'app-dashnavbar',
  templateUrl: './dashnavbar.component.html',
  styleUrls: ['./dashnavbar.component.css']
})
export class DashnavbarComponent implements OnInit {

  searchInput;
  coordinates;
  constructor(
  	private compComm: CompCommunicationService,
    private geoLocationService: GeoLocationService
  	) { }

  ngOnInit() {
  	this.nameSearch("");
  	// console.log("initt");
  }

  nameSearch(value){
  	this.compComm.searchName(value);
  }

  locationSearch(){
      this.geoLocationService.getPosition().subscribe(
        (pos: Position) => {
            this.coordinates = {
              lat:  +(pos.coords.latitude),
              lng: +(pos.coords.longitude)
            };
           this.compComm.searchLocation(this.coordinates);
       });
  }

}
