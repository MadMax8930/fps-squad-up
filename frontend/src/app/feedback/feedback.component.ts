import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  commentForm : FormGroup;
  gameName : any;
  postId : any;
  post : any;
  comments : any[];
  UserId : any;

  constructor(private activatedRoute : ActivatedRoute, 
              private postService : PostService, 
              private authService: AuthService,
              private commentService : CommentService) {
                this.commentForm = new FormGroup({});
               }

  ngOnInit(): void {
    this.UserId = this.authService.getIdByToken();
    this.showAllComments();
    this.initForm();
  }

  showAllComments() {
    this.commentService.showAllComments(this.postId).subscribe(
      (resp:any) => {
        this.comments = resp;
        console.log(resp);
        
      }
    )
  }

  initForm(){
    this.commentForm = new FormGroup ({
     content: new FormControl('', [Validators.required])
    })
  }

  submitComment(){
    const comment = {
      content: this.commentForm.value.content,
      PostId: this.activatedRoute.snapshot.params['PostId']
    }

    console.log(comment)
    this.commentService.createComment(comment).subscribe();
    this.showAllComments();
    this.initForm();

}

}

