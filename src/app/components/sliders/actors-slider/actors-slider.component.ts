import { Component, Input, OnInit } from '@angular/core';

// swiper
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'actors-slider',
  templateUrl: './actors-slider.component.html',
  styleUrls: ['./actors-slider.component.scss']
})
export class ActorsSliderComponent implements OnInit {

  @Input() actorsList : any;

  // swiper config
  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 60,
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
      380: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 4
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
