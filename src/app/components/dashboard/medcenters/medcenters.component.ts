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

  dataArray = [{}]
  constructor(private getfeed: GetfeedinfoService) { }

  ngOnInit() {
    this.fillfeeds();
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
