import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { FoodformComponent } from './foodform/foodform.component';
import { MedformComponent } from './medform/medform.component';

const routes: Routes = [
	{ 
		path: 'vacancy',
		component: HomeComponent,
		children: 
		[
			{ path: 'foodform', component: FoodformComponent},
			{ path: 'medform', component:MedformComponent },
			{ path: '', redirectTo: 'foodform', pathMatch: 'full'}
		] 
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
