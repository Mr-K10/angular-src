import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetfeedinfoService } from '../../services/getfeedinfo.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormsubmitionService } from '../../services/formsubmition.service';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit,OnChanges {
  id: string;
  private sub: any;

  foodcenter: string;
  medcenter: string;
  foodcenter_id: string;
  medcenter_id: string;
  name: string;
  phone: string;
  email: string;

  constructor(
  	private route:ActivatedRoute,
  	private router: Router,
  	private getfeedinfo:GetfeedinfoService,
  	private validate:ValidateService,
  	private flashMessage:FlashMessagesService,
  	private formsubmition:FormsubmitionService
  	) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       	this.id = params['id'];
       	this.getfeedinfo.getInfobyid(this.id).subscribe(data => {
       		if(data.type === 'food'){
       			localStorage.setItem('food',data.name);
       			localStorage.setItem('food_id',this.id);
       			this.foodcenter = data.name;
       			this.foodcenter_id = this.id;
       		}
       		else{
       			localStorage.setItem('med',data.name);
       			localStorage.setItem('med_id',this.id);
       			this.medcenter = data.name;
       			this.medcenter_id = this.id;
       		}

       	});

       	if(localStorage.getItem('food')!=null){
       		this.foodcenter = localStorage.getItem('food');
       		this.foodcenter_id = localStorage.getItem('food_id');
       	}

       	if(localStorage.getItem('med')!=null){
       		this.medcenter = localStorage.getItem('med');
       		this.medcenter_id = localStorage.getItem('med_id');
       	}

       	if(localStorage.getItem('name')!=null){
       		this.name = localStorage.getItem('name');
       	}

       	if(localStorage.getItem('phone')!=null){
       		this.phone = localStorage.getItem('phone');
       	}

       	if(localStorage.getItem('email')!=null){
       		this.email = localStorage.getItem('email');
       	}

    });
  }

  ngOnChanges(){
  	if(this.name!=undefined)
  		localStorage.setItem('name',this.name);
  	if(this.phone!=undefined)
  		localStorage.setItem('phone',this.phone);
  	if(this.email!=undefined)
  		localStorage.setItem('email',this.email);

  	console.log('changing');
  }

  SubmitForm(){
  	const data = {
  		name : this.name,
  		phone : this.phone,
  		email : this.email,
  		medcntr: this.medcenter_id,
  		foodcntr: this.foodcenter_id
  	};

  	//validation

  	if(!this.validate.validateUserDetails(data)){
  		this.flashMessage.show('Fill in all fields',{cssClass:'alert-danger',timeout:3000});
  		return false;
  	}

  	if(!this.validate.validateEmail(data.email)){
  		this.flashMessage.show('Enter valid E-mail',{cssClass:'alert-danger',timeout:3000});
  		return false;
  	}

  	if(!this.validate.validatePhone(data.phone)){
  		this.flashMessage.show('Enter valid Mobile Number',{cssClass:'alert-danger',timeout:3000});
  		return false;
  	}

  	//submit
  	this.formsubmition.submitUserDetails(data).subscribe(res => {

  		if(res.success){
  		 	this.flashMessage.show('Center(s) have been booked',{cssClass: 'alert-success', timeout: 3000});
  			this.router.navigate(['/dashboard']);

  		}
  		else{
  		 	this.flashMessage.show('Something went wrong',{cssClass: 'alert-danger', timeout: 3000});
  		}
  	});


  }

}
