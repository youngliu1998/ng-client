import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBox } from './list-box';

describe('ListBox', () => {
  let component: ListBox;
  let fixture: ComponentFixture<ListBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
