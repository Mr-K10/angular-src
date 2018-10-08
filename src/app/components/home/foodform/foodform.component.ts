import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodform',
  templateUrl: './foodform.component.html',
  styleUrls: ['./foodform.component.css']
})
export class FoodformComponent implements OnInit {

  name: String;
  phone: Number;
  location: String;
  available: String;

  constructor() { }

  ngOnInit() {
  }

  onFoodformSubmit() {
  	data : {
  		type: 'food'
  		name: this.name;
  		phone: this.phone;
  		location: this.location;
  		available: this.available;
  	}

  	//validation via validation service

  	//form submition via service

  }

}
