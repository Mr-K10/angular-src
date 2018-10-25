import { Component, OnInit, OnDestroy } from '@angular/core';
import { Info, Location } from '../../info';
import { GetfeedinfoService } from '../../../services/getfeedinfo.service';
import { CompCommunicationService } from '../../../services/comp-communication.service';

@Component({
  selector: 'app-foodcenters',
  templateUrl: './foodcenters.component.html',
  styleUrls: ['./foodcenters.component.css']
})
export class FoodcentersComponent implements OnInit, OnDestroy {
  infoSub;
  searchByNameSub;
  searchByLocationSub;
  zoom = 14;
  loaderShow = true;
  errorShow = false;
  dataArray = [{name: "sdf",phone: undefined, email: undefined, distance:undefined, location: {lng: undefined, lat: undefined}}]
  searchedArray = [{name: "sdf",phone: undefined, email: undefined}]

  constructor(
    private getfeed: GetfeedinfoService,
    private compComm:CompCommunicationService
    ) { }

  ngOnInit() {
    this.loaderShow = true;
    this.fillfeeds();
  }

  fillfeeds(){
    this.infoSub = this.getfeed.getFoodInfo().subscribe(infoArray => {
      this.dataArray = infoArray;
      this.searchedArray = infoArray;
      this.loaderShow = false;
      this.searchByName();
      this.searchByLocation();
    },
    err => {
      console.log(err);
      this.loaderShow = false;
      this.errorShow = true;
      return false;
    });
  }

  searchByLocation(){
    this.searchByLocationSub = this.compComm.searchLocationSub.subscribe((data) => {
      let temp = [];
// console.log(data);
      this.dataArray.forEach((obj)=>{
        let obj_tmp = obj;
        obj_tmp.distance = this.getDistance(data.lat,data.lng,obj.location.lat,obj.location.lng);

        // console.log(obj.location);
        temp.push(obj_tmp);
      });

      temp.sort(this.compare);
      //console.table(temp);
      this.searchedArray = temp;
    },
    (err) => {
      console.log(err);
    });
  }

  searchByName(){
    this.searchByNameSub = this.compComm.searchNameSub.subscribe((data) => {
      let temp = [];

      this.dataArray.forEach((obj)=>{
        if(obj.name.toLowerCase().includes(data.toLowerCase())){
          temp.push(obj);
        }
      });
      this.searchedArray = temp;
      // console.table(this.searchedArray);
    },
    err => {
      console.log("error "+err);
    });
  }

  setFoodType(data){
    this.compComm.setFood(data);
  }

  ngOnDestroy(){
    // this.infoSub.unsubscribe();
    // this.searchByNameSub.unsubscribe();
    // this.searchByLocationSub.unsubscribe();
    // console.log("unsub")
  }

  getDistance(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  compare(obj1,obj2){
    if(obj1.distance<obj2.distance)
      return -1;
    else return 1;
    // return 0;
  }

}
