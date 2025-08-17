import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError, tap, finalize } from 'rxjs/operators';
import { WishItem } from '../../share/module/wish-item';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private apiUrl = 'http://localhost:3005/wish-list'; // 你的 API 端點
  private wishSubject = new BehaviorSubject<WishItem[]>([]);
  constructor(private http: HttpClient) {}

  wishes$ = this.wishSubject.asObservable();

  loadWishes(): void {
    this.http
      .get<WishItem[]>(this.apiUrl, { withCredentials: true })
      .pipe(
        tap((wishes: any) => {
          console.log('()=>{getWishes tap}');
          return this.wishSubject.next(wishes.data);
        }),
        map((response: any) => response.data) // 使用 map 運算子，將 Observable<ApiResponse> 轉換為 Observable<WishItem[]>
      )
      .subscribe();
  }

  createWish(wishText: string) {
    if (!wishText) {
      console.log('願望不可為空');
      return;
    }
    this.http
      .post(this.apiUrl, { wishText }, { withCredentials: true })
      .pipe(
        tap(() => {
          console.log('()=>{createWish tap}');
          return this.loadWishes();
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
          return this.loadWishes();
        }),
        catchError((err) => {
          console.error('status update failed:', err);
          return of(null); // 回傳一個 null 的 Observable 以繼續執行
        })
      )
      .subscribe();
  }

  deleteWish(id: number): void {
    const url = `${this.apiUrl}/${id}`; // Construct the URL with the item ID
    this.http
      .delete(url, { withCredentials: true })
      .pipe(tap(() => this.loadWishes()))
      .subscribe();
  }

  // getWishes(): Observable<WishItem[]> {
  //   // 發送請求，並指定回傳格式為 ApiResponse
  //   return this.http
  //     .get<WishItem[]>(this.apiUrl, { withCredentials: true })
  //     .pipe(
  //       tap(() => {
  //         console.log('()=>{getWishes tap}');
  //       }),
  //       // 使用 map 運算子，將 Observable<ApiResponse> 轉換為 Observable<WishItem[]>
  //       map((response: any) => response.data)
  //     );
  // }
}
