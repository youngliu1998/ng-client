import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../share/module/wish-item';

@Component({
  selector: 'add-new-wish',
  imports: [FormsModule],
  templateUrl: './add-new-wish.html',
  styleUrl: './add-new-wish.css',
})
export class AddNewWish {
  @Input() wishes: WishItem[] = [];
  newWishText: string = '';

  addNewWish() {
    this.wishes.push({ wishText: this.newWishText, isCompleted: false });
    this.newWishText = '';
  }
}
