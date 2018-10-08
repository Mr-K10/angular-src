import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AgmCoreModule } from '@agm/core';

import { HomeRoutingModule } from './home-routing.module';
import { FoodformComponent } from './foodform/foodform.component';
import { MedformComponent } from './medform/medform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    HomeRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOiyfzciD7XuSqr1PvboCg5zWFi5zCcJc'
    })
  ],
  declarations: [
	HomeComponent,
	FoodformComponent, 
	MedformComponent
  ]
})
export class HomeModule { }
