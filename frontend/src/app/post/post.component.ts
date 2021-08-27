import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  userId: number;
  alert: boolean = false;
  games: [];

  postForm = new FormGroup({

    title: new FormControl(''),
    content: new FormControl(''),
    imageUrl: new FormControl(''),
    gameId: new FormControl('')
    
  
    });

    constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router, private gameService: CategoryService,
      private authService: AuthService) { }


    ngOnInit(): void {
      this.initForm;
      this.gameService.getGames().subscribe((resp) => {
        this.games = resp;
        console.log(this.games);
      });
      this.userId = this.authService.getIdByToken();

    }
  
    initForm() {
      this.postForm = this.formBuilder.group({
      title: this.formBuilder.control(""),
      content: this.formBuilder.control(""),
      gameId: this.formBuilder.control("")
      }) 
    }
    
  
    submitPost() {
      const formValues = this.postForm.value;
      console.log(formValues)
      this.postService.createPost(this.userId, formValues)
      .subscribe((response) => {
        console.log('Post created successfully!');
        console.log(response);
        this.alert = true
        this.postForm.reset({});
        })
    }
  
    closeAlert() {
      this.alert = false;
    }

}
