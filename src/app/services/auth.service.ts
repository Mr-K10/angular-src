import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type' , 'application/json');
  	return this.http.post('http://localhost:3000/users/register',user,{headers:headers})
    // return this.http.post('users/register',user,{headers:headers})
  	.pipe(map(res=>res.json()));

  }

  loginUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/auth',user,{headers:headers})
    // return this.http.post('users/auth',user,{headers:headers})
    .pipe(map(res=>res.json()));
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers:headers})
    // return this.http.get('users/profile',{headers:headers})
    .pipe(map(res=>res.json()));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token); // angular jwt automatically check for id_token so use this, or else change everything else
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

   loggedIn(){
     this.loadToken();
     const jwtHelper = new JwtHelperService();
     return !jwtHelper.isTokenExpired(this.authToken);
   }
}
