import { Component, inject, OnInit } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../share/module/user';
import { UserService } from '../../share/services/user-service';

@Component({
  selector: 'app-layout',
  imports: [Header, AsyncPipe, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {
  user$!: Observable<User>;
  isAuth$!: Observable<boolean>;
  private userService = inject(UserService);
  ngOnInit(): void {
    this.user$ = this.userService.user$;
    this.isAuth$ = this.userService.isAuth$;
    this.userService.loaduser();
  }
  checkIsAuth() {
    this.isAuth$.subscribe((res) => console.log(res));
    this.user$.subscribe((res) => console.log(res));
  }
}
