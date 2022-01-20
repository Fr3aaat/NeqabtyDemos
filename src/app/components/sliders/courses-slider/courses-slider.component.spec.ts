import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSliderComponent } from './courses-slider.component';

describe('CoursesSliderComponent', () => {
  let component: CoursesSliderComponent;
  let fixture: ComponentFixture<CoursesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
