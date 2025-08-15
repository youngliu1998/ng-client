import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  constructor(private httpLogin: HttpClient, private router: Router) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('aimer@mail.com'),
    password: new FormControl('12345'),
  });

  apiUrl = 'http://localhost:3005/auth/login';
  onLogin() {
    const formValue = this.loginForm.value;
    this.httpLogin
      .post(this.apiUrl, formValue, { withCredentials: true })
      .subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.message) {
            alert(res.message);
            this.router.navigateByUrl('/dashboard');
          } else {
            alert(res.error);
          }
        },
        error: (error) => {
          alert(error.error);
        },
      });
  }
}
