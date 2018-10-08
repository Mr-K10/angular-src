import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medform',
  templateUrl: './medform.component.html',
  styleUrls: ['./medform.component.css']
})
export class MedformComponent implements OnInit {
  name: String;
  phone: Number;
  location: String;
  available: String;

  constructor() { }

  ngOnInit() {
  }

  onMedformSubmit() {
  	data : {
  		type: 'med'
  		name: this.name;
  		phone: this.phone;
  		location: this.location;
  		available: this.available;
  	}

  	//validation via validation service

  	//form submition via service


}
