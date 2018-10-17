import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { FoodcentersComponent } from './foodcenters/foodcenters.component';
import { MedcentersComponent } from './medcenters/medcenters.component';
import { DashnavbarComponent } from './dashnavbar/dashnavbar.component';
import { DashboardComponent } from './dashboard.component';
import { FormModalComponent } from './form-modal/form-modal.component'; 
import { FlashMessagesModule } from 'angular2-flash-messages';
// import { FlashMessagesModule } from 'angular2-flash-messages';

import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    FlashMessagesModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOiyfzciD7XuSqr1PvboCg5zWFi5zCcJc'
    })
  ],
  declarations: [
  	DashboardComponent,
  	FoodcentersComponent,
  	MedcentersComponent,
  	DashnavbarComponent,
    FormModalComponent
  ]
})
export class DashboardModule { }
