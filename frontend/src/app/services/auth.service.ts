import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl : string = environment.api_url;

  constructor(private http: HttpClient, private router: Router) { }

  register(user: User):Observable<any> {
    return this.http.post<any>(this.baseUrl + "/register", user)
  }

  login(user: User):Observable<any> {
    return this.http.post<any>(this.baseUrl + "/login", user)
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

  logout() {
    localStorage.removeItem('TOKEN_APPLI');
    localStorage.removeItem('USER_ID');
    this.router.navigate(["/"]);
  }
}
