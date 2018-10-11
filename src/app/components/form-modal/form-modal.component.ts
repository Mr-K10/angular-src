import { Component, OnInit } from '@angular/core';
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
export class FormModalComponent implements OnInit {
  id: String;
  private sub: any;

  foodcenter: String;
  medcenter: String;
  name: String;
  phone: String;
  email: String;

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
       			this.foodcenter = data.name;
       		}
       		else{
       			localStorage.setItem('med',data.name);
       			this.medcenter = data.name;
       		}

       	});

       	if(localStorage.getItem('food')!=null)
       		this.foodcenter = localStorage.getItem('food');

       	if(localStorage.getItem('med')!=null)
       		this.medcenter = localStorage.getItem('med');
    });
  }

  SubmitForm(){
  	const data = {
  		name : this.name,
  		phone : this.phone,
  		email : this.email,
  		medcntr: this.medcenter,
  		foodcntr: this.foodcenter
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
    console.log(data);
    console.log(res);
  		if(res.success){
  		 	this.flashMessage.show('You are now registered and can login',{cssClass: 'alert-success', timeout: 3000});
  			this.router.navigate(['/login']);
  		}
  		else{
  		 	this.flashMessage.show('Something went wrong',{cssClass: 'alert-danger', timeout: 3000});
  			this.router.navigate(['/register']);
  		}
  	});


  }

}
