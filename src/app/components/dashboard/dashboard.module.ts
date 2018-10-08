import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoodcentersComponent } from './foodcenters/foodcenters.component';
import { MedcentersComponent } from './medcenters/medcenters.component';
import { DashnavbarComponent } from './dashnavbar/dashnavbar.component';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
  	DashboardComponent,
  	FoodcentersComponent,
  	MedcentersComponent,
  	DashnavbarComponent
  ]
})
export class DashboardModule { }
