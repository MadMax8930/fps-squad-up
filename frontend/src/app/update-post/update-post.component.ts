import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  // updateForm = new FormGroup({

  //   title: new FormControl(''),
  //   content: new FormControl(''),
  //   imageUrl: new FormControl('')
    
  //   });

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  // submitUpdate() {
  //   const formValues = this.updateForm.value;
  //   console.log(formValues)
  //   this.postService.updatePost(formValues)
  //   .subscribe((response) => {
  //     console.log('Post updated successfully!');
  //     console.log(response);
  //     })
  // }


}
