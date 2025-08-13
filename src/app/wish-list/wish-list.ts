import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../share/module/wish-item';
import { WishListFilter } from './wish-list-filter/wish-list-filter';
import { AddNewWish } from './add-new-wish/add-new-wish';
import { ListBox } from './list-box/list-box';

@Component({
  selector: 'app-wish-list',
  imports: [FormsModule, WishListFilter, AddNewWish, ListBox],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList {
  wishes = [
    new WishItem('Master angular'),
    new WishItem('Master nestJS'),
    new WishItem('Find work qq'),
  ];
  filter: any;
}
