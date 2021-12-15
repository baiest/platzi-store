import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination])
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnInit {
  images = [
    'assets/images/banner-1.webp',
    'assets/images/banner-2.webp',
    'assets/images/banner-3.webp',
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
