import { Component, Input, OnInit } from '@angular/core';

// swiper
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {

  @Input() topNewsList : any;

  // swiper config
  public config: SwiperOptions = {
    slidesPerView: 1,
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
