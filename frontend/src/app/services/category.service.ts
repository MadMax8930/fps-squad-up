import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  baseUrl : string = environment.api_url;

  constructor(private httpClient: HttpClient) { }

  public getGames(){
    return this.httpClient.get<any>(this.baseUrl + "/games");
  }

}
