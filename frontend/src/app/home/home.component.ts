import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.readAllPost().subscribe(
      (response: any) => {
        this.posts = response;
        console.log(this.posts);
      }
    )
  }

}
