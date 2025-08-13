import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListFilter } from './wish-list-filter';

describe('WishListFilter', () => {
  let component: WishListFilter;
  let fixture: ComponentFixture<WishListFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishListFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishListFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
