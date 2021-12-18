import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  UserId : any;
  alert: boolean = false;

  updateForm = new FormGroup({

    title: new FormControl(''),
    content: new FormControl('')
    
    });

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router,
    private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.UserId = this.authService.getIdByToken();
  }

  submitUpdate() {
    const post = this.activatedRoute.snapshot.params["id"]
    const formValues = this.updateForm.value;
    console.log(formValues)
    this.postService.updatePost(post, this.UserId, formValues)
    .subscribe((response) => {
      console.log('Post updated successfully!');
      console.log(response);
      this.alert = true;
      setTimeout(() => {
        this.router.navigate(['/account']); 
      }, 5000);
      })
  }

  closeAlert() {
      this.alert = false;
  }

}
