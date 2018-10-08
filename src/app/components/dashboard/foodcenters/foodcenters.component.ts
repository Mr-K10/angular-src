import { Component, OnInit } from '@angular/core';
import { Info, Location } from '../../info';
import { GetfeedinfoService } from '../../../services/getfeedinfo.service';
import { clickButton } from '../../form-modal/form-modal.component';

@Component({
  selector: 'app-foodcenters',
  templateUrl: './foodcenters.component.html',
  styleUrls: ['./foodcenters.component.css']
})
export class FoodcentersComponent implements OnInit {
  zoom: number = 14;

  dataArray = [
  	new Info (
  		'food',
  		'Khusagra\'s Bisleri',
  		'6969696969',
  		new Location(25.2677,82.9913),
  		69,
      '2'
  	),
  	new Info (
  		'food',
  		'Kailash ke Bhature',
  		'6969696969',
  		new Location(25.2677,83.2213),
  		69,
      '3'
  	),
  ];

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

  activateModal(){
    console.log('activateModel');
    clickButton();
  }

}
