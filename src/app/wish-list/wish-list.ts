import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  imports: [AsyncPipe, WishListFilter, AddNewWish, ListBox],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList implements OnInit, OnChanges {
  wishes$!: Observable<WishItem[]>;
  constructor(private wishService: WishService) {
    this.wishes$ = this.wishService.wishes$;
  }

  ngOnInit(): void {
    this.wishService.loadWishes();
  }
  ngOnChanges(changes: SimpleChanges): void {}
  filter: any;
}
