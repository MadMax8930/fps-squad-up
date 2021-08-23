import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  post :{
    title : string,
    content : string,
    imageUrl : string,
    gameId: string,
    UserId : number 
}

  ngOnInit(): void {
  }

  randomPost(){
    this.postService.findRandom(this.post)
    .subscribe((post) => {
      console.log(post);
      this.post = post
    });
  };

}
