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
  show = true;

  constructor(
  	private authService:AuthService,
  	private router:Router
  	) { }

  ngOnInit() {
    this.show = true;
  	this.authService.getProfile().subscribe(profile => {
  		this.user = profile.user;
      this.show = false;
  	},
  	err => {
  		console.log(err);
  		return false;
  	});
  }

}
