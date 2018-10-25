import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormsubmitionService } from '../../../services/formsubmition.service';
import { GeoLocationService } from '../../../services/geo-location.service';
import { Router } from '@angular/router';
import { Info, Location } from '../../info';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-foodform',
  templateUrl: './foodform.component.html',
  styleUrls: ['./foodform.component.css']
})
export class FoodformComponent implements OnInit,OnDestroy {
admin:Object;
admin_id:String;
  locationSub;
  sub;
  lat: number = 25.2677;
  lng: number = 82.9913;
  zoom: number = 14;

  name: String;
  phone: String;
  location = {
    lat: this.lat,
    lng: this.lng
  };
  currLocation = {
    lat: undefined,
    lng: undefined
  };
  available: Number;

  constructor(
  	private validateService: ValidateService,
  	private flashMessage: FlashMessagesService,
    private formsubmitionService: FormsubmitionService,
    private authService:AuthService,

    private router: Router,
    private geoLocationService: GeoLocationService
  	) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.admin = profile.user;
      this.admin_id = profile.user._id;
      console.log(this.admin_id);
    },
    err => {
      console.log(err);
      return false;
    });
  }

  ngOnDestroy()  {
    // this.locationSub.unsubscribe();
    // this.sub.unsubscribe();
  }

  setMarkerToCurrentLocation(){
    this.locationSub = this.geoLocationService.getPosition().subscribe( (pos: Position) => {
      this.currLocation = {
        lat: +(pos.coords.latitude),
        lng: +(pos.coords.longitude)
      }
      this.location.lng = this.currLocation.lng;
      this.location.lat = this.currLocation.lat;
      //console.log(pos);
    },
    (err)=>{
      console.log("error" + err);
    });

    // console.log(this.currLocation.lng != undefined);
    if(this.currLocation.lng != undefined){
      this.location.lng = this.currLocation.lng;
      this.location.lat = this.currLocation.lat;
      // console.log(this.currLocation);
    }
  }

  onFoodformSubmit() {

  //  console.log(this.user+'hahaha');
  	const data = new Info(
  		'food',
  		this.name,
  		this.phone,
  		this.location,
  		this.available,
      'time',
      this.admin_id
  	)
     console.log(this.admin_id);
    // console.log(data);
  	//validation via validation service

  	if(!this.validateService.validateForm(data)){
  		this.flashMessage.show('Please fill in all fields',{cssClass: 'alert-danger', timeout: 3000});
  	  return false;
    }

  	if(!this.validateService.validatePhone(data.phone)){
  		this.flashMessage.show('Enter Valid Mobile Number',{cssClass: 'alert-danger', timeout: 3000});
  	  return false;
    }

    //form submition via service
    this.sub = this.formsubmitionService.submitForm(data).subscribe(res => {
    //console.log(res);
       if(res.success){
         this.flashMessage.show(data.type + 'center has been register',{cssClass: 'alert-success', timeout: 3000});
         this.router.navigate(['/dashboard']);
       }
       else{
         this.flashMessage.show('Something went wrong, try again '+res.msg +', try again',{cssClass: 'alert-danger', timeout: 3000});
      }

    });

  }

  onChooseLocation(event){
       this.location.lat = event.coords.lat;
       this.location.lng = event.coords.lng;
       // console.log(this.location);
  }
}
