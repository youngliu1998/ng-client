import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from '../../share/services/user-service';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  constructor(private userService: userService, private router: Router) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('aimer@mail.com'),
    password: new FormControl('12345'),
  });

  apiUrl = 'http://localhost:3005/auth/login';
  onLogin() {
    const formValue = this.loginForm.value;
    this.userService.login(formValue);
  }
}
