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
  toggleFullfill(item: WishItem) {
    item.isCompleted = !item.isCompleted;
  }
  async removeWish(wish: any) {
    console.log('wish: ', wish);
    const { id } = wish;
    this.wishService.deleteWish(id).subscribe({
      next: () => {
        // Handle a successful deletion
        console.log('Item deleted successfully!');
        // You might want to refresh your data or show a success message
        this.events.emit('getWishes', null);
      },
      error: (error) => {
        // Handle errors
        console.error('Error deleting item:', error);
        // You might want to show an error message to the user
      },
      complete: () => {
        // Optional: called when the observable completes
        console.log('Deletion process completed.');
      },
    });
  }
}
