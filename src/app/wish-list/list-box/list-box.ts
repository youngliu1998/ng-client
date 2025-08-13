import { Component, Input } from '@angular/core';
import { WishItem } from '../../../share/module/wish-item';
import { WishListItem } from './wish-list-item/wish-list-item';

@Component({
  selector: 'list-box',
  imports: [WishListItem],
  templateUrl: './list-box.html',
  styleUrl: './list-box.css',
})
export class ListBox {
  @Input() wishes: WishItem[] = [];
}
