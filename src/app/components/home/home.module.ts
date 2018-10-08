import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component'

import { HomeRoutingModule } from './home-routing.module';
import { FoodformComponent } from './foodform/foodform.component';
import { MedformComponent } from './medform/medform.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [
	HomeComponent,
	FoodformComponent, 
	MedformComponent
  ]
})
export class HomeModule { }
