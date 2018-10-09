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
  obj = {};

  foodcenter: String;
  medcenter: String;

  constructor(
  	private route:ActivatedRoute,
  	private getfeedinfo:GetfeedinfoService
  	) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       	this.id = params['id']; 
       	this.getfeedinfo.getInfobyid(this.id).subscribe(data => {
       		this.obj = data;
       		if(data.type == 'food')
       			localStorage.setItem('food',data.name);
       		else
       			localStorage.setItem('med',data.name);

       	});

       	if(localStorage.getItem('food')!=null)
       		this.foodcenter = localStorage.getItem('food');

       	if(localStorage.getItem('med')!=null)
       		this.medcenter = localStorage.getItem('med');
    });
  }
  
}
