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
import { HeaderGlobalComponent } from './components/header-global/header-global.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentComponent } from './components/payment/payment.component';
// sliders
import { NewsSliderComponent } from './components/sliders/news-slider/news-slider.component';
import { ActorsSliderComponent } from './components/sliders/actors-slider/actors-slider.component';
import { TripsSliderComponent } from './components/sliders/trips-slider/trips-slider.component';
import { CoursesSliderComponent } from './components/sliders/courses-slider/courses-slider.component';
import { AdvertisementsSliderComponent } from './components/sliders/advertisements-slider/advertisements-slider.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { Global } from './global';
// pages
// global
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsInnerComponent } from './pages/news-inner/news-inner.component';
import { PaymentsComponent } from './pages/payments/payments.component';
// Courses Module
import { CoursesComponent } from './pages/Courses-module/courses/courses.component';
import { OffersComponent } from './pages/Courses-module/offers/offers.component';
// Trips Module
import { CitiesComponent } from './pages/trips-module/cities/cities.component';
import { DestinationsComponent } from './pages/trips-module/destinations/destinations.component';
import { UnitsComponent } from './pages/trips-module/units/units.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { TripsComponent } from './pages/trips-module/trips/trips.component';
import { TripsCardsComponent } from './pages/trips-module/trips-cards/trips-cards.component';
import { OffersCardsComponent } from './pages/Courses-module/offers-cards/offers-cards.component';

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
    NewsSliderComponent,
    ActorsSliderComponent,
    TripsSliderComponent,
    CoursesSliderComponent,
    AdvertisementsSliderComponent,
    HeaderGlobalComponent,
    PaginationComponent,
    LoginComponent,
    SignUpComponent,
    PaymentsComponent,
    NewsComponent,
    NewsInnerComponent,
    ForgetPasswordComponent,
    SideMenuComponent,
    SearchBoxComponent,
    TripsComponent,
    TripsCardsComponent,
    OffersCardsComponent,
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
