import { Component, OnInit } from '@angular/core';
import { Info, Location } from '../../info';
import { GetfeedinfoService } from '../../../services/getfeedinfo.service';

@Component({
  selector: 'app-medcenters',
  templateUrl: './medcenters.component.html',
  styleUrls: ['./medcenters.component.css']
})
export class MedcentersComponent implements OnInit {
  zoom: number = 14;

  dataArray = [
  	new Info (
  		'food',
  		'Khusagra\'s Bisleri',
  		'6969696969',
  		new Location(25.2677,82.9913),
  		69
  	),
  	new Info (
  		'food',
  		'Kailash ke Bhature',
  		'6969696969',
  		new Location(25.2677,83.2213),
  		69
  	),
  ];
  constructor(private getfeed: GetfeedinfoService) { }

  ngOnInit() {
  }

  fillfeeds(){
    this.getfeed.getMedInfo().subscribe(infoArray => {
      this.dataArray = infoArray;
    },
    err => {
      console.log(err);
      return false;
    });
  }


}
