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
  userId : number;

  constructor(private http: HttpClient) { }

  createPost(UserId, post: Post):Observable<any> {
    console.log(post)
    return this.http.post<any>(`${this.baseUrl}/user/${UserId}/post`, post);
  }

  readAllPost():Observable<any> {
    return this.http.get<any>(this.baseUrl + "/posts");
  }

  updatePost(id, UserId, post: Post):Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/user/${UserId}/post/${id}`, post);
  }   

  deletePost(id, UserId):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/user/${UserId}/post/${id}`);
  }

  readAllMyPosts(post: Post):Observable<any> {
    return this.http.get<any>(this.baseUrl + "/user/posts");
  }

  readPost(post: Post):Observable<any> {
    return this.http.get<any>(this.baseUrl + "/post/:id");
  }

  readAllPostsByGameId(post: Post):Observable<any> {
    return this.http.get<any>(this.baseUrl + "/game/:gameId/posts")
  }

  findRandom(post: Post): Observable<any>{
    return this.http.get<any>(this.baseUrl + "/posts/random");
  } 

}
