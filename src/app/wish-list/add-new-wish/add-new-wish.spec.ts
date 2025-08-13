import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewWish } from './add-new-wish';

describe('AddNewWish', () => {
  let component: AddNewWish;
  let fixture: ComponentFixture<AddNewWish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewWish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewWish);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
