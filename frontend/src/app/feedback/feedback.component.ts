import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  // gameName : any;
  postId : any;
  comments : [];


   commentForm = new FormGroup({

    content: new FormControl('', [Validators.required])
    
    });

  constructor(private activatedRoute : ActivatedRoute, 
              private postService : PostService, 
              private authService: AuthService,
              private commentService : CommentService,
              private router : Router) { }

  ngOnInit(): void {
   
    this.commentService.showAllComments(this.activatedRoute.snapshot.params['id']).subscribe(
      (resp)=> {
        console.log(resp);
        this.comments = resp}
    );
  }

  showAllComments() {
    this.commentService.showAllComments(this.postId).subscribe(
      (resp:any) => {
        this.comments = resp;
        console.log(resp);
        
      }
    )
  }

  submitComment(){
    const comment = {
      content: this.commentForm.value.content,
      PostId: this.activatedRoute.snapshot.params['id']
    }
    const formValues = this.commentForm.value;
    console.log(formValues)
    this.commentService.createComment(comment).subscribe(
      (response) => {
      console.log('Comment created successfully!');
      console.log(response);
      });
    this.showAllComments();
}

  refreshPage() {
    window.location.reload();
  }

}

