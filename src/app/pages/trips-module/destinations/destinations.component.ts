import {
  HttpClient
} from '@angular/common/http';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  serviceUrl = 'https://trips.ese.et3.co/api/destinations';

  trips: any;
  cityId: any;
  noTripsFounded = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cityId = this.route.snapshot.paramMap.get("id");

    if (this.cityId) {
      this.getCityTrips(this.cityId);
    } else {
      this.getTrips();
    }
  }

  // get all trips
  getTrips() {
    this.http.get(this.serviceUrl).subscribe(
      (res: any) => {
        console.log(res);
        this.trips = res.destinations;

        // check if there trips
        if (this.trips.length == 0) {
          this.noTripsFounded = true;
        } else {
          this.noTripsFounded = false;
        }
      },
      (err: any) => {
        console.log("Error: ", err);
      }
    )
  }

  // get current city trips
  getCityTrips(cityId: any) {
    this.http.get(this.serviceUrl + "?format=json&filter{city.id}=" + cityId).subscribe(
      (res: any) => {
        console.log(res);
        this.trips = res.destinations;

        // check if there trips
        if (this.trips.length == 0) {
          this.noTripsFounded = true;
        } else {
          this.noTripsFounded = false;
        }
      },
      (err: any) => {
        console.log("Error: ", err);
      }
    )
  }
}
