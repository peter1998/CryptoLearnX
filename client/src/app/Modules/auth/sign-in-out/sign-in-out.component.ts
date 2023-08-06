import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-in-out',
  templateUrl: './sign-in-out.component.html',
  styleUrls: ['./sign-in-out.component.css'],
})
export class SignInOutComponent {
  registrationForm!: FormGroup;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  //TODO: Show input validations on HTML
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      repass: ['', [Validators.required]],
    });
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //TODO: Add notifiations
  onRegister() {
    console.log(this.registrationForm.value);
    this.authService
      .signUp(
        this.registrationForm.value['email'],
        this.registrationForm.value['pass']
      )
      .then((d) => {
        console.log(d);
      });
  }

  onLogin() {
    this.authService
      .signIn(
        this.loginForm.value['email'],
        this.loginForm.value['pass']
      )
      .then((d) => {
        console.log(d);
      });
  }
}
