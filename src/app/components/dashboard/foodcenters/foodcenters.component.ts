import { Component, OnInit } from '@angular/core';
import { Info, Location } from '../../info';
import { GetfeedinfoService } from '../../../services/getfeedinfo.service';

@Component({
  selector: 'app-foodcenters',
  templateUrl: './foodcenters.component.html',
  styleUrls: ['./foodcenters.component.css']
})
export class FoodcentersComponent implements OnInit {
  zoom: number = 14;

  dataArray = [{}]

  constructor( private getfeed: GetfeedinfoService) { }

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

}
