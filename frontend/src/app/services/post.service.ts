import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl : string = environment.api_url;

  constructor(private http: HttpClient) { }

  createPost(post: Post):Observable<any> {
    console.log(post)
    return this.http.post<any>(this.baseUrl + "/user/posts", post)
  }

  readPost(post: Post):Observable<any> {
    return this.http.get<any>(this.baseUrl + "/user/post/:id")
  }

  readAllPost(post: Post):Observable<any> {
    return this.http.get<any>(this.baseUrl + "/user/post")
  }

  updatePost(post: Post):Observable<any> {
    return this.http.patch<any>(this.baseUrl + "/user/post/:id", post);
  }   

  deletePost(post: Post):Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/user/post/:id")
  }

  readById(post: Post):Observable<any> {
    return this.http.get<any>(this.baseUrl + "/user/post/account")
  }

}
