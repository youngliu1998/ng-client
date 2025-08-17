import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../share/module/wish-item';
import { WishService } from '../../../share/services/wish.service';
import { EventService } from '../../../share/services/event-service';

@Component({
  selector: 'add-new-wish',
  imports: [FormsModule],
  templateUrl: './add-new-wish.html',
  styleUrl: './add-new-wish.css',
})
export class AddNewWish {
  @Input() wishes: WishItem[] = [];
  constructor(private wishService: WishService, private events: EventService) {}
  newWishText: string = '';

  addNewWish() {
    // console.log('add new Wish:', this.newWishText);
    this.wishService.createWish(this.newWishText);
    this.newWishText = '';
  }
}
