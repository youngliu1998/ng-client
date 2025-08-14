import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WishItem } from '../../../share/module/wish-item';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private apiUrl = 'http://localhost:3005/wish-list'; // 你的 API 端點

  constructor(private http: HttpClient) {}

  getWishes(): Observable<WishItem[]> {
    // 發送請求，並指定回傳格式為 ApiResponse
    return this.http.get<WishItem[]>(this.apiUrl).pipe(
      // 使用 map 運算子，將 Observable<ApiResponse> 轉換為 Observable<WishItem[]>
      map((response: any) => response.data)
    );
  }
}
