import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateCenter(data){
    if(data.foodcntr == null && data.medcntr == null)
      return false;
    return true;
  }

  validateRegister(user){
  	if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined)
  		return false;
  	else return true;
  }

  validateEmail(email){
  	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateForm(data){
    if(data.name == undefined || data.phone == undefined || data.available == undefined)
      return false;
    else return true;
  }

  validatePhone(phone){
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phone);    
  }

  validateUserDetails(data){
    if(data.name == undefined || data.phone == undefined || data.email == undefined)
      return false;
    else
      return true;
  }
}
