import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormsubmitionService } from '../../../services/formsubmition.service';
import { Router } from '@angular/router';
import { Info, Location } from '../../info';

@Component({
  selector: 'app-foodform',
  templateUrl: './foodform.component.html',
  styleUrls: ['./foodform.component.css']
})
export class FoodformComponent implements OnInit {

  lat: number = 25.2677;
  lng: number = 82.9913;
  zoom: number = 14;

  name: String;
  phone: String;
  location = {
    lat: this.lat,
    lng: this.lng
  };
  available: Number;

  constructor(
  	private validateService: ValidateService,
  	private flashMessage: FlashMessagesService,
    private formsubmitionService: FormsubmitionService,
    private router: Router
  	) { }

  ngOnInit() {
  }

  onFoodformSubmit() {
  	const data = new Info(
  		'food',
  		this.name,
  		this.phone,
  		this.location,
  		this.available,
      'time'
  	)
    console.log('submiting');
    console.log(data);
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
    this.formsubmitionService.submitForm(data).subscribe(res =>{
       if(res.success){
         this.flashMessage.show(data.type + 'center has been register',{cssClass: 'alert-success', timeout: 3000});
         this.router.navigate(['/dashboard']);
       }
       else{
         this.flashMessage.show('Something went wrong, ' + res.err + ' try again',{cssClass: 'alert-danger', timeout: 3000});
      }

    });

  }

  onChooseLocation(event){
       this.location.lat = event.coords.lat;
       this.location.lng = event.coords.lng;
       console.log(this.location);
  }


}
