import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, config, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { User } from '../module/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class userService {
  private apiUrl = 'http://localhost:3005/user'; // 你的 API 端點
  private authUrl = 'http://localhost:3005/auth';

  defaultUser = { id: 0, name: '', email: '', avatar: '' };
  private userSubject = new BehaviorSubject<User>(this.defaultUser);
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private route: Router) {}

  user$ = this.userSubject.asObservable();
  isAuth$ = this.isAuthSubject.asObservable();
  loaduser(): void {
    this.http
      .get<User>(this.apiUrl, { withCredentials: true })
      .pipe(
        tap((res: any) => {
          console.log('()=>{getuser tap}');
          this.isAuthSubject.next(true);
          this.userSubject.next(res);
          this.route.navigateByUrl('/dashboard');
        }),
        catchError((err) => {
          console.log('Authorization failed');
          return of(null);
        })
      )
      .subscribe();
  }

  login(formLogin: any): void {
    const loginUrl = this.authUrl + '/login';
    this.http
      .post(loginUrl, formLogin, { withCredentials: true })
      .pipe(
        tap((res: any) => {
          console.log('() => {login tap}');
          this.loaduser();
          alert(res.message);
        }),
        catchError((err: any) => {
          // console.log(err.message);
          alert('Authentication failed');
          return of(null);
        })
      )
      .subscribe();
  }

  logout(): void {
    const logoutUrl = this.authUrl + '/logout';

    // ==== request server to remove cookie ====

    this.http
      .post(logoutUrl, {}, { withCredentials: true })
      .pipe(
        finalize(() => {
          console.log('()=>{logout tap}');
          this.isAuthSubject.next(false);
          this.userSubject.next(this.defaultUser);
          this.route.navigateByUrl('/');
        })
      )
      .subscribe();
  }
  createWish(user: string) {
    if (!user) {
      console.log('user不可為空');
      return;
    }
    this.http
      .post(this.apiUrl, {}, { withCredentials: true })
      .pipe(
        tap(() => {
          console.log('()=>{createWish tap}');
          return this.loaduser();
        }),
        catchError((err) => {
          console.error('create wish failed:', err);
          return of(null); // 回傳一個 null 的 Observable 以繼續執行
        })
      )
      .subscribe();
  }

  updateWishStatus(id: number): void {
    this.http
      .patch(this.apiUrl, { id }, { withCredentials: true })
      .pipe(
        tap(() => {
          console.log('()=>{updateWishStatus tap}');
          return this.loaduser();
        }),
        catchError((err) => {
          console.error('status update failed:', err);
          return of(null); // 回傳一個 null 的 Observable 以繼續執行
        })
      )
      .subscribe();
  }

  // deleteWish(id: number): void {
  //   const url = `${this.apiUrl}/${id}`; // Construct the URL with the item ID
  //   this.http
  //     .delete(url, { withCredentials: true })
  //     .pipe(tap(() => this.loaduser()))
  //     .subscribe();
  // }
}
