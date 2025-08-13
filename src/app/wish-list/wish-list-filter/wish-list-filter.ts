import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WishItem } from '../../../share/module/wish-item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-list-filter',
  imports: [FormsModule],
  templateUrl: './wish-list-filter.html',
  styleUrl: './wish-list-filter.css',
})
export class WishListFilter implements OnInit {
  filters = [
    (item: WishItem) => item,
    (item: WishItem) => !item.isCompleted,
    (item: WishItem) => item.isCompleted,
  ];
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<void>();
  constructor() {}
  ngOnInit(): void {
    this.updateFilter('0');
  }
  filterOption: string = '0';
  updateFilter(value: any) {
    this.filter = this.filters[value];
    return this.filterChange.emit(this.filter);
  }
}
