import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetfeedinfoService } from '../../../services/getfeedinfo.service';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormsubmitionService } from '../../../services/formsubmition.service';
import { CompCommunicationService } from '../../../services/comp-communication.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit,OnDestroy {

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
  	private formsubmition:FormsubmitionService,
    private compComm:CompCommunicationService
  	) { }

  ngOnInit() {

    this.compComm.foodSubject.subscribe( 
      data => {
        this.foodcenter = data.name;
        this.foodcenter_id = data._id;
      });

    this.compComm.selectedMed.subscribe(
      data => {
        this.medcenter = data.name;
        this.medcenter_id = data._id;
      });

    this.compComm.userDetails.subscribe(
      data => {
        if(data.name != undefined) this.name = data.name;
        if(data.phone != undefined) this.phone = data.phone;
        if(data.email != undefined) this.email = data.email; 
      }
    )
  }

  ngOnDestroy() {
    const data = {
      name : this.name,
      phone : this.phone,
      email : this.email
    };
    this.compComm.saveUserDetails(data);

  }

  removeFood(){
    this.compComm.setFood({name:undefined,_id:undefined});
    this.foodcenter = null;
    this.foodcenter_id = null;
  }

  removeMed(){
    this.compComm.setMed({name:undefined,_id:undefined});
    this.medcenter = null;
    this.medcenter_id = null;
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

    if(!this.validate.validateCenter(data)){
      this.flashMessage.show('Select atleast one center to register',{cssClass:'alert-danger',timeout:3000});
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
