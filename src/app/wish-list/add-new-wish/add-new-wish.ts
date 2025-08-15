import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../share/module/wish-item';
import { WishService } from '../wish.service';

@Component({
  selector: 'add-new-wish',
  imports: [FormsModule],
  templateUrl: './add-new-wish.html',
  styleUrl: './add-new-wish.css',
})
export class AddNewWish {
  @Input() wishes: WishItem[] = [];
  constructor(private wishService: WishService) {}
  newWishText: string = '';

  addNewWish() {
    this.wishService.createWishes(this.newWishText);
    this.newWishText = '';
  }
}
