import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  baseUrl : string = environment.api_url;

  constructor(private http: HttpClient) { }

  public getGames(){
    return this.http.get<any>(this.baseUrl + "/games");
  }

}
