import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { FoodcentersComponent } from './foodcenters/foodcenters.component';
import { MedcentersComponent } from './medcenters/medcenters.component';
import { DashnavbarComponent } from './dashnavbar/dashnavbar.component';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOiyfzciD7XuSqr1PvboCg5zWFi5zCcJc'
    })
  ],
  declarations: [
  	DashboardComponent,
  	FoodcentersComponent,
  	MedcentersComponent,
  	DashnavbarComponent
  ]
})
export class DashboardModule { }
