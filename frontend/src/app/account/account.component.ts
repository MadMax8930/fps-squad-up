import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { User } from '../models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  posts : [];
  post: any;
  userId: any;
  postId: any;
  userName: any;

  constructor(private postService: PostService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.showMyPosts();
    this.userName = localStorage.getItem("USER_NAME");
  }

  showMyPosts() {
    return this.postService.readAllMyPosts(this.userId).subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  };

  deleteOnClick(id, UserId){
    this.postService.deletePost(id, UserId).subscribe(posts => {
      console.log('Post deleted successfully!');
      console.log(posts);
      this.showMyPosts();
    });
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

}
