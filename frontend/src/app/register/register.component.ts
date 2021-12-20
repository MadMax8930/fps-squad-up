import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      name: this.formBuilder.control("", Validators.required),
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
    const formValues = this.registerForm.value;
    this.authService.register(formValues)
    .subscribe((response) => {
        console.log('Account successfully created!');
        console.log(response);
        this.router.navigate(['/login']);
    });
  }

}
