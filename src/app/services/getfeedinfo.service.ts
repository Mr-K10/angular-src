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
    return this.http.get('http://localhost:3000/',{headers:headers})
    // return this.http.post('',user,{headers:headers})
    .pipe(map(res=>res.json()));

  }

  getMedInfo(){
  	let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/',{headers:headers})
    // return this.http.post('',user,{headers:headers})
    .pipe(map(res=>res.json()));

  }
}
