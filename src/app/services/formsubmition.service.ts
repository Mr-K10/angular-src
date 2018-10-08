import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormsubmitionService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  submitForm(data){
    console.log("Reached");
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/admindata',data,{headers:headers})
    // return this.http.post('users/admindata',user,{headers:headers})
    .pipe(map(res=>res.json()));
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
