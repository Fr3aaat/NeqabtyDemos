import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCardsComponent } from './offers-cards.component';

describe('OffersCardsComponent', () => {
  let component: OffersCardsComponent;
  let fixture: ComponentFixture<OffersCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
