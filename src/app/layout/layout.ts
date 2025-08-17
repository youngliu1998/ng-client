import { Component, OnInit } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../share/module/user';
import { userService } from '../../share/services/user-service';

@Component({
  selector: 'app-layout',
  imports: [Header, AsyncPipe, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {
  user$!: Observable<User>;
  isAuth$!: Observable<boolean>;
  constructor(private userService: userService) {
    this.user$ = this.userService.user$;
    this.isAuth$ = this.userService.isAuth$;
  }
  ngOnInit(): void {
    this.userService.loaduser()
  }
  checkIsAuth(){
    this.isAuth$.subscribe(res => console.log(res))
    this.user$.subscribe(res => console.log(res))
  }
}
