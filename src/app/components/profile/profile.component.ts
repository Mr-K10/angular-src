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
      this.loaderShow = false;
  	},
  	err => {
  		console.log(err);
      this.errorShow = true;
      this.loaderShow = false;
  		return false;
  	});
  }

}
