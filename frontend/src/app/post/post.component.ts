import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  alert: boolean = false;

  postForm = new FormGroup({

    title: new FormControl(''),
    content: new FormControl(''),
    imageUrl: new FormControl(''),
    gameId: new FormControl('')
    
  
    });

    constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) { }


    ngOnInit(): void {
      this.initForm;
    }
  
    initForm() {
      this.postForm = this.formBuilder.group({
      title: this.formBuilder.control(""),
      content: this.formBuilder.control(""),
      image_url: this.formBuilder.control(""),
      game_id: this.formBuilder.control("")
      })
      
    }
  
    submitPost() {
      const formValues = this.postForm.value;
      formValues.game_id = 11
      console.log(formValues)
      this.postService.createPost(formValues)
      .subscribe((response) => {
        console.log('Quote created successfully!');
        console.log(response);
        this.alert = true
        this.postForm.reset({});
        })
    }
  
    closeAlert() {
      this.alert = false;
    }

}
