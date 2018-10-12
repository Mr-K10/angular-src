import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component'
import { FoodcentersComponent } from './foodcenters/foodcenters.component';
import { MedcentersComponent } from './medcenters/medcenters.component';
import { DashnavbarComponent } from './dashnavbar/dashnavbar.component';
import { FormModalComponent } from './form-modal/form-modal.component'; 


const dashboardRoutes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		children:[
			{ 
				path: 'foodcenters', 
				component: FoodcentersComponent 
			},
			{ 
				path: 'medcenters', 
				component: MedcentersComponent
			},
			{
				path: '',
				redirectTo: 'foodcenters',
				pathMatch: 'full'
			},
			{
				path: 'form',
				component: FormModalComponent
			}
		]
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(dashboardRoutes)
	],
	exports: [
		RouterModule
	]
})
export class DashboardRoutingModule { }
