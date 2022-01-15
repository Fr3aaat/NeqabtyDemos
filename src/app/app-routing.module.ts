import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
// Courses Module
import { CoursesComponent } from './pages/Courses-module/courses/courses.component';
import { OffersComponent } from './pages/Courses-module/offers/offers.component';
// Trips Module//
import { CitiesComponent } from './pages/trips-module/cities/cities.component';
import { DestinationsComponent } from './pages/trips-module/destinations/destinations.component';
import { UnitsComponent } from './pages/trips-module/units/units.component';

const routes: Routes = [
  // global
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'payment/:data', component: PaymentComponent },
  // courses module
  { path: 'courses', component: CoursesComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'offers/:id', component: OffersComponent },
  // trips module
  { path: 'trips', component: CitiesComponent },
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
