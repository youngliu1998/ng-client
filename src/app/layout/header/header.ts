import { Component, Input } from '@angular/core';
import { userService } from '../../../share/services/user-service';
import { User } from '../../../share/module/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() user!: User;
  @Input() isAuth!: boolean;
  constructor(private userService: userService) {}
  logout(): void {
    this.userService.logout();
  }
  // check(){
  //   console.log('user',this.user)
  //   console.log('isAuth',this.isAuth)
  // }
}
