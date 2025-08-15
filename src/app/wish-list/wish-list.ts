import { Component, OnInit } from '@angular/core';
import { WishItem } from '../../share/module/wish-item';
import { WishListFilter } from './wish-list-filter/wish-list-filter';
import { AddNewWish } from './add-new-wish/add-new-wish';
import { ListBox } from './list-box/list-box';
import { EventService } from '../../share/services/event-service';
import { Observable } from 'rxjs';
import { WishService } from './wish.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-wish-list',
  imports: [ AsyncPipe, WishListFilter, AddNewWish, ListBox],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList implements OnInit {
  wishes = [
    new WishItem('Master angular'),
    new WishItem('Master nestJS'),
    new WishItem('Find work qq'),
  ];
  wishes$!: Observable<WishItem[]>;
  isLoading = true;
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      const wishIndex = this.wishes.indexOf(wish);
      this.wishes.splice(wishIndex, 1);
    });
  }
  ngOnInit(): void {
    this.wishes$ = this.wishService.getWishes();
  }
  getWish() {
    console.log(this.wishes$);
  }
  filter: any;
}
