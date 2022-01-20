import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// pages
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsInnerComponent } from './pages/news-inner/news-inner.component';
import { PaymentsComponent } from './pages/payments/payments.component';
// component
import { PaymentComponent } from './components/payment/payment.component';
// Courses Module
import { CoursesComponent } from './pages/Courses-module/courses/courses.component';
import { OffersComponent } from './pages/Courses-module/offers/offers.component';
// Trips Module
import { TripsComponent } from './pages/trips-module/trips/trips.component';
import { CitiesComponent } from './pages/trips-module/cities/cities.component';
import { DestinationsComponent } from './pages/trips-module/destinations/destinations.component';
import { UnitsComponent } from './pages/trips-module/units/units.component';

const routes: Routes = [
  // global
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createAccount', component: SignUpComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsInnerComponent },
  { path: 'payment', component: PaymentsComponent },

  { path: 'payment/:data', component: PaymentComponent },
  // courses module
  { path: 'courses', component: CoursesComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'offers/:id', component: OffersComponent },
  // trips module
  { path: 'trips', component: TripsComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'trips/destinations', component: DestinationsComponent },
  { path: 'trips/destinations/:id', component: DestinationsComponent },
  { path: 'trips/units', component: UnitsComponent },
  { path: 'trips/units/:id', component: UnitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
