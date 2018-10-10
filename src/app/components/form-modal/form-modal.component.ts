import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetfeedinfoService } from '../../services/getfeedinfo.service';

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
  	private getfeedinfo:GetfeedinfoService
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

  	//submit
  }
  
}
