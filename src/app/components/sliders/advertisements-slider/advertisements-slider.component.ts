import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

// swiper
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'advertisements-slider',
  templateUrl: './advertisements-slider.component.html',
  styleUrls: ['./advertisements-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdvertisementsSliderComponent implements OnInit {

  @Input() advertisementsList : any;
  
  // swiper config
  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 3500,
    },
    navigation: {
      nextEl: ".swiper-nav-next",
      prevEl: ".swiper-nav-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: "bullets",
      clickable: true
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
