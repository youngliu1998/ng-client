import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../share/module/wish-item';
import { WishListFilter } from './wish-list-filter/wish-list-filter';
import { AddNewWish } from './add-new-wish/add-new-wish';
import { ListBox } from './list-box/list-box';
import { EventService } from '../../share/services/event-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WishService } from './wish-list-filter/wish.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-wish-list',
  imports: [FormsModule, AsyncPipe, WishListFilter, AddNewWish, ListBox],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList implements OnInit {
  test: any = [];
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
    this.wishService.getWishes().subscribe((config: any) => {
      this.test = config.data;
    });
    this.wishes$ = this.wishService.getWishes();
  }
  getWish() {
    console.log(this.wishes$);
    console.log(this.test);
  }
  filter: any;
}
