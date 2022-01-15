import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: [];
  post: any;
  userId: any;
  postId: any;
  userName: any;

  constructor(private postService: PostService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("USER_NAME");
    this.postService.readAllPost().subscribe(
      (response: any) => {
        this.posts = response;
        console.log(this.posts);
      }
    )
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    // window.location.reload();
  }

}
