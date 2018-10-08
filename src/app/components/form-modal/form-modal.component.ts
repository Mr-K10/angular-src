import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

// jQuery Sign $
declare let $: any;
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  
  @ViewChild('modal') modal:ElementRef; 


  constructor() { }

  ngOnInit() {
  }
  
  clickButton(){ 	
	console.log('clickButton')
    $(this.modal.nativeElement).modal('show');
  }


}
