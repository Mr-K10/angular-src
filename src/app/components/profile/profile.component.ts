import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  zoom = 14;
  centreArray=[{}];
  loaderShow = true;
  errorShow = false;
  constructor(
  	private authService:AuthService,
  	private router:Router
  	) { }

  ngOnInit() {
    this.loaderShow = true;
  	this.authService.getProfile().subscribe(profile => {
  		this.user = profile.user;
      this.centreArray=profile.array;
      //console.log(this.user);
      this.loaderShow = false;
      console.table(this.centreArray);
  	},
  	err => {
  		console.log(err);
      this.errorShow = true;
      this.loaderShow = false;
  		return false;
  	});
  }

}
