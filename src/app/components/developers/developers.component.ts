import { Component, OnInit } from '@angular/core';
import { DeveloperProfile } from './DeveloperProfile'

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  dataArray = [
  	new DeveloperProfile (
  		'Khusagra Sharma',
  		'Backend Developer of the App',
  		'Developed the RESTful APIs required to get and post Information from Database.',
  		'IDK',
  		'/static/image/khus.jpg'
  	),
  	new DeveloperProfile (
  		'Kautilya Katiha',
  		'Frontend Developer of the App',
  		'Developed the frontend in Angular2',
  		'Not Specified',
  		'/static/image/kautilya.jpg'
  	),
  	new DeveloperProfile (
  		'Kailash Choudhary',
  		'Fifth wheel to the car',
  		'Has done questions on Codeforces and Codechef while other two were working',
  		'Rather not say',
  		'/static/image/kailash.jpg'
  	)

  ];

  constructor() { }

  ngOnInit() {
  }

}
