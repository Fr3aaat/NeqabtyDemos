import { Component, Input, OnInit } from '@angular/core';

// swiper
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'courses-slider',
  templateUrl: './courses-slider.component.html',
  styleUrls: ['./courses-slider.component.scss']
})
export class CoursesSliderComponent implements OnInit {

  @Input() coursesList : any;
  
  // swiper config
  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: {
      nextEl: ".swiper-nav-next",
      prevEl: ".swiper-nav-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      991: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
