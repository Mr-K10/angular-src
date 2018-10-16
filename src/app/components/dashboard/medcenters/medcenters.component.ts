import { Component, OnInit } from '@angular/core';
import { Info, Location } from '../../info';
import { GetfeedinfoService } from '../../../services/getfeedinfo.service';
import { CompCommunicationService } from '../../../services/comp-communication.service';

@Component({
  selector: 'app-medcenters',
  templateUrl: './medcenters.component.html',
  styleUrls: ['./medcenters.component.css']
})
export class MedcentersComponent implements OnInit {
  zoom: number = 14;
  show = true;

  dataArray = [{}]
  constructor(
    private getfeed: GetfeedinfoService,
    private compcomm: CompCommunicationService
    ) { }

  ngOnInit() {
    this.show = true;
    this.fillfeeds();
  }

  fillfeeds(){
    this.getfeed.getMedInfo().subscribe(infoArray => {
      this.dataArray = infoArray;
      this.show = false;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  setMed(data){
    this.compcomm.setMed(data);
  }
}
