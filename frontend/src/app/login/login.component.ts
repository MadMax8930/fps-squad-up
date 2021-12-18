import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control("", Validators.required),
      password: this.formBuilder.control("", [Validators.required, Validators.minLength(8), Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')])
    }); 
  }

//   (?=\D*\d) - there must be 1 digit
//   (?=[^a-z]*[a-z]) - there must be 1 lowercase ASCII letter
//   (?=[^A-Z]*[A-Z]) - there must be 1 uppercase ASCII letter
//   .{8,30} - any 8 to 30 chars other than line break chars
//   $ - end of string (implicit in string regex pattern).

  submitForm() {
    const formValues = this.loginForm.value;
    this.authService.login(formValues)
    .subscribe((response: any) => {
        console.log('User successfully logged in!', response);
        console.log(response);
        this.router.navigate(['/account']);
      });
  }

}
