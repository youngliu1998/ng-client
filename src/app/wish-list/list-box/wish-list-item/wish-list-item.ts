import { Component, Input } from '@angular/core';
import { WishItem } from '../../../../share/module/wish-item';
import { EventService } from '../../../../share/services/event-service';
import { WishService } from '../../../../share/services/wish.service';
@Component({
  selector: 'wish-list-item',
  imports: [],
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {
  @Input() wish!: WishItem;
  constructor(private wishService: WishService, private events: EventService) {}
  toggleFullfill(wish: WishItem) {
    this.wishService.updateWishStatus(wish.id);
  }
  async removeWish(wish: WishItem) {
    const { id } = wish;
    this.wishService.deleteWish(id);
  }
}
