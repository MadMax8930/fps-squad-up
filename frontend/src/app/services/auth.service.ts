import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl : string = environment.api_url;
 
  constructor(
    private http: HttpClient, 
    private router: Router,
    ) { }

  register(user: User):Observable<any> {
    return this.http.post<any>(this.baseUrl + "/user/register", user)
  }

  login(user: User):Observable<any> {
    return this.http.post<any>(this.baseUrl + "/user/login", user)
    .pipe(
      map(
        (resp: any) => {
          console.log(resp);        
          localStorage.setItem('TOKEN_APPLI', resp.token);
          localStorage.setItem('USER_ID', resp.id);
          console.log('Token Save');
          console.log(resp.id);
          return resp;
        }
      )
    )
  }

  getIdByToken(){
    const token = localStorage.getItem("TOKEN_APPLI")
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken)
    const id = decodedToken.userId;
    return id;
  }
  
  logout() {
    localStorage.removeItem('TOKEN_APPLI');
    localStorage.removeItem('USER_ID');
    this.router.navigate(["/"]);
  }
}
