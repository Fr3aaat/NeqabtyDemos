import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementsSliderComponent } from './advertisements-slider.component';

describe('AdvertisementsSliderComponent', () => {
  let component: AdvertisementsSliderComponent;
  let fixture: ComponentFixture<AdvertisementsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementsSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
