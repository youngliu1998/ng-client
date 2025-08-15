import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WishItem } from '../../share/module/wish-item';
import { EventService } from '../../share/services/event-service';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private apiUrl = 'http://localhost:3005/wish-list'; // 你的 API 端點

  constructor(private http: HttpClient, private events: EventService) {}

  getWishes(): Observable<WishItem[]> {
    // 發送請求，並指定回傳格式為 ApiResponse
    return this.http
      .get<WishItem[]>(this.apiUrl, { withCredentials: true })
      .pipe(
        // 使用 map 運算子，將 Observable<ApiResponse> 轉換為 Observable<WishItem[]>
        map((response: any) => response.data)
      );
  }
  createWish(wishText: string) {
    // 發送請求，並指定回傳格式為 ApiResponse
    return this.http
      .post(this.apiUrl, { wishText }, { withCredentials: true })
      .subscribe({
        next: () => {
          console.log('新增成功');
          // 刪除成功後，立即重新載入資料
          this.events.emit('getWishes', '');
        },
        error: (error) => {
          console.error('新增項目時發生錯誤:', error);
        },
      });
  }
  deleteWish(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`; // Construct the URL with the item ID
    return this.http.delete(url, { withCredentials: true });
  }
}
