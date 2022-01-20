import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsSliderComponent } from './trips-slider.component';

describe('TripsSliderComponent', () => {
  let component: TripsSliderComponent;
  let fixture: ComponentFixture<TripsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
