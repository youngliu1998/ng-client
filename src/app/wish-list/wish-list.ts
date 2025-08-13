import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../share/module/wish-item';

@Component({
  selector: 'app-wish-list',
  imports: [FormsModule],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList {
  items = [
    new WishItem('Master angular'),
    new WishItem('Master nestJS', true),
    new WishItem('Find work qq'),
  ];
  toggleFullfill(item: WishItem) {
    item.isCompleted = !item.isCompleted;
  }
  newWishText: string = '';
  addNewWish() {
    this.items.push({ wishText: this.newWishText, isCompleted: false });
  }
  // filters = [
  //   (item: WishItem) => item,
  //   (item: WishItem) => !item.isCompleted,
  //   (item: WishItem) => item.isCompleted,
  // ];
  itemsSelected: WishItem[] = this.items;
  filterOption: string = '0';
  updateFilter() {
    switch (this.filterOption) {
      case '0':
        this.itemsSelected = this.items;
        break;
      case '1':
        this.itemsSelected = this.items.filter((item) => !item.isCompleted);
        break;
      case '2':
        this.itemsSelected = this.items.filter((item) => item.isCompleted);
        break;
    }
  }
}
