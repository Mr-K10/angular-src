import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetfeedinfoService {

  constructor(private http:Http) { }

  getFoodInfo(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/foodinfo',{headers:headers})
    // return this.http.get('users/foodinfo',{headers:headers})
    .pipe(map(res=>res.json()));
  }

  getInfobyid(id: String){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/info/'+id,{headers:headers})
    // return this.http.get('users/info'+id,{headers:headers})
    .pipe(map(res=>res.json()));
  }

  getMedInfo(){
  	let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/medinfo',{headers:headers})
    // return this.http.get('users/medinfo',{headers:headers})
    .pipe(map(res=>res.json()));

  }
}
