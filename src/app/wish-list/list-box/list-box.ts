import { Component, Input } from '@angular/core';
import { WishItem } from '../../../share/module/wish-item';

@Component({
  selector: 'list-box',
  imports: [],
  templateUrl: './list-box.html',
  styleUrl: './list-box.css',
})
export class ListBox {
  @Input() wishes: WishItem[] = [];
  toggleFullfill(item: WishItem) {
    item.isCompleted = !item.isCompleted;
  }
}
