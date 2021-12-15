import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SwiperModule } from "swiper/angular";

import { BannerComponent } from "./components/banner/banner.component";
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations : [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class HomeModule{

}