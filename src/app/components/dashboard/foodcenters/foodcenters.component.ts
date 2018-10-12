import { Component, OnInit } from '@angular/core';
import { Info, Location } from '../../info';
import { GetfeedinfoService } from '../../../services/getfeedinfo.service';
import { CompCommunicationService } from '../../../services/comp-communication.service';

@Component({
  selector: 'app-foodcenters',
  templateUrl: './foodcenters.component.html',
  styleUrls: ['./foodcenters.component.css']
})
export class FoodcentersComponent implements OnInit {
  zoom = 14;

  dataArray = [{}]

  constructor( 
    private getfeed: GetfeedinfoService,
    private compComm:CompCommunicationService
    ) { }

  ngOnInit() {
    this.fillfeeds();
  }

  fillfeeds(){
    this.getfeed.getFoodInfo().subscribe(infoArray => {
      this.dataArray = infoArray;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  setFoodType(data){
    this.compComm.setFood(data);
  }

}
