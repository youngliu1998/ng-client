import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../share/module/wish-item';
import { WishListFilter } from './wish-list-filter/wish-list-filter';

@Component({
  selector: 'app-wish-list',
  imports: [FormsModule, WishListFilter],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList {
  wishes = [
    new WishItem('Master angular'),
    new WishItem('Master nestJS'),
    new WishItem('Find work qq'),
  ];
  toggleFullfill(item: WishItem) {
    item.isCompleted = !item.isCompleted;
  }
  newWishText: string = '';
  addNewWish() {
    this.wishes.push({ wishText: this.newWishText, isCompleted: false });
  }

  wishesSelected: WishItem[] = this.wishes;
  filter: any;
}
