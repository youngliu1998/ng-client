import { Component, Input } from '@angular/core';
import { WishItem } from '../../../../share/module/wish-item';
import { EventService } from '../../../../share/services/event-service';

@Component({
  selector: 'wish-list-item',
  imports: [],
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {
  @Input() wish!: WishItem;
  constructor(private events: EventService) {}
  toggleFullfill(item: WishItem) {
    item.isCompleted = !item.isCompleted;
  }
  removeWish(wish: WishItem) {
    this.events.emit('removeWish', wish);
  }
}
