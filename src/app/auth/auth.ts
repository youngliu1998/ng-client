import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  loginFrom: FormGroup = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),
  });

  onLogin(){
    
  }
}
