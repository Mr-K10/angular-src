import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompCommunicationService {

	public foodSubject = new BehaviorSubject<any>({name: undefined, _id: undefined});
	// selectedFood = this.foodSubject.asObservable();

	private medSubject = new BehaviorSubject<any>({name: undefined, _id: undefined});
	selectedMed = this.medSubject.asObservable();

  public userDetails = new BehaviorSubject<any>({name: undefined,phone: undefined, email: undefined});

	constructor() { }

  saveUserDetails(data){
    this.userDetails.next(data);
  }

	setFood(data){
		this.foodSubject.next(data);
	}

	setMed(data){
		this.medSubject.next(data);
	}

}
