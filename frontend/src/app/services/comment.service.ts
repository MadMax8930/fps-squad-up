import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl : string = environment.api_url;
  //userId : number;

  constructor(private http: HttpClient) { }

  createComment(comment: Comment):Observable<any> {
    console.log(comment)
    return this.http.post<any>(`${this.baseUrl}/user/post/${comment.PostId}/comment`, comment);
  }

  showAllComments(comment):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user/post/${comment}/comments`);
  }
}
