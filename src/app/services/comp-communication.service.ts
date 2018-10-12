import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompCommunicationService {

	private foodSubject = new BehaviorSubject<any>(undefined);
	selectedFood = this.foodSubject.asObservable();

	private medSubject = new BehaviorSubject<any>(undefined);
	selectedMed = this.medSubject.asObservable();

  	constructor() { }

  	setFood(data){
  		this.foodSubject.next(data);
  	}

  	setMed(data){
  		this.medSubject.next(data);
  	}

}
