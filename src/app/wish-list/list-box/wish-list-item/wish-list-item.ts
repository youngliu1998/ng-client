import { Component, Input } from '@angular/core';
import { WishItem } from '../../../../share/module/wish-item';
import { EventService } from '../../../../share/services/event-service';
import { WishService } from '../../wish.service';

@Component({
  selector: 'wish-list-item',
  imports: [],
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {
  @Input() wish!: WishItem;
  constructor(private wishService: WishService, private events: EventService) {}
  toggleFullfill(wish: any) {
    this.wishService.updateWishStatus(wish.id);
  }
  async removeWish(wish: any) {
    console.log('wish: ', wish);
    const { id } = wish;
    this.wishService.deleteWish(id);
  }
}
