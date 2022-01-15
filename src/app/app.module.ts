import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Plugins
// ngx swiper
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Global } from './global';

// pages
import { HomeComponent } from './pages/home/home.component';
// Courses Module
import { CoursesComponent } from './pages/Courses-module/courses/courses.component';
import { OffersComponent } from './pages/Courses-module/offers/offers.component';
// Trips Module
import { CitiesComponent } from './pages/trips-module/cities/cities.component';
import { DestinationsComponent } from './pages/trips-module/destinations/destinations.component';
import { UnitsComponent } from './pages/trips-module/units/units.component';
import { PaymentComponent } from './components/payment/payment.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    OffersComponent,
    CitiesComponent,
    DestinationsComponent,
    UnitsComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
