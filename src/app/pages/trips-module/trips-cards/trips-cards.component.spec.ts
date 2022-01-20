import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsCardsComponent } from './trips-cards.component';

describe('TripsCardsComponent', () => {
  let component: TripsCardsComponent;
  let fixture: ComponentFixture<TripsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
