import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Global } from 'src/app/global';

// swiper
import { SwiperOptions } from 'swiper';
// hashing
import { sha256 } from 'js-sha256';

declare var COWPAYIFRAMEDIALOG: any;
declare var COWPAYOTPDIALOG: any;

@Component({
  selector: 'units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  serviceUrl = 'https://trips.ese.et3.co/api/destinations/';
  pricingUrl = 'https://trips.ese.et3.co/api/pricings/';
  bookingUrl = 'https://trips.ese.et3.co/api/bookings/';
  paymentUrl = 'https://wallet.ese.et3.co/api/testpay';
  destinations: any;
  buildings: any;
  periodPricing: any;
  currentDestinationID: any;
  destinationFeatures: any;
  priceIncluded: any[] = [];
  priceNotIncluded: any[] = [];
  extraFeatures: any[] = [];
  finalAddonsPrice = 0;
  pricingID : any;

  chooseAvailiablePeriod = new FormGroup({
    unitPeriods: new FormControl('', Validators.required)
  });

  reserveTrip = new FormGroup({
    fullName: new FormControl({
      value: '',
      disabled: true
    }, Validators.required),
    memberId: new FormControl({
      value: '',
      disabled: true
    }, Validators.required),
    destination: new FormControl({
      value: '',
      disabled: true
    }, Validators.required),
    checkInDate: new FormControl({
      value: '',
      disabled: true
    }, Validators.required),
    checkOutDate: new FormControl({
      value: '',
      disabled: true
    }, Validators.required),
    price: new FormControl({
      value: '',
      disabled: true
    }),
    extraChair: new FormControl(''),
  });

  // swiper config
  public config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 30,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: {
      nextEl: ".btn-slider-next",
      prevEl: ".btn-slider-prev",
    },
    pagination: {
      el: '.swiper-pagination-fraction',
      type: "fraction",
      clickable: false
    },
  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router : Router , private global: Global) {}

  ngOnInit(): void {
    this.currentDestinationID = this.route.snapshot.paramMap.get('id');

    this.getDestinations(this.currentDestinationID);

    this.getDestinationBuildings(this.currentDestinationID);

    this.getDestinationFeatures(this.currentDestinationID);
  }

  // get all destinations
  getDestinations(itemID: any) {
    this.http.get(this.serviceUrl + itemID).subscribe(
      (res: any) => {
        this.destinations = res.destination;
      },
      (err: any) => {
        console.log("Error: ", err);
      }
    )
  }

  // get all destination buildings
  getDestinationBuildings(itemID: any) {
    this.http.get(this.serviceUrl + itemID + '/buildings').subscribe(
      (res: any) => {
        this.buildings = res.buildings;
      },
      (err: any) => {
        console.log("Error: ", err);
      }
    )
  }

  // Destination features as included and not included
  getDestinationFeatures(itemID: any) {
    this.http.get(this.serviceUrl + itemID + '/features').subscribe(
      (res: any) => {
        this.destinationFeatures = res.features;

        for (let x = 0; x < this.destinationFeatures.length; x++) {
          if (this.destinationFeatures[x].included == true) {
            this.priceIncluded.push(this.destinationFeatures[x]);
          } else {
            this.priceNotIncluded.push(this.destinationFeatures[x]);
          }
        }
      },
      (err: any) => {
        console.log("Error: ", err);
      }
    )
  }

  // get current price for current period
  getPeriodPricing(pricingID: any) {
    this.http.get(this.pricingUrl + pricingID).subscribe(
      (res: any) => {
        this.periodPricing = res.pricing;
        console.log("Pricing: " , res)
      },
      (err: any) => {
        console.log("Error: ", err);
      }
    )
  }

  // when select item of extra features
  getExtraFeatures(currentFeature: any, item: any) {
    let extraFeatureName = currentFeature.name;
    let addonsFeaure;
    this.finalAddonsPrice = 0;

    for (let x = 0; x < this.extraFeatures.length; x++) {
      if (currentFeature.name == this.extraFeatures[x].id) {
        this.extraFeatures.splice(x, 1);
      }
    }

    addonsFeaure = {
      id: extraFeatureName,
      name: extraFeatureName,
      price: currentFeature.price,
      count: item.target.value,
      totalPrice: (currentFeature.price) * (item.target.value)
    }
    this.extraFeatures.push(addonsFeaure);

    for (let i = 0; i < this.extraFeatures.length; i++) {
      this.finalAddonsPrice += this.extraFeatures[i].totalPrice;
    }
  }

  // book unit with specific period
  reserveUnit() {
    this.pricingID = this.chooseAvailiablePeriod.get("unitPeriods")?.value;
    this.getPeriodPricing(this.pricingID);

    this.reserveTrip.controls.fullName.setValue(this.global.enginnerUser.fullname);
    this.reserveTrip.controls.memberId.setValue(this.global.enginnerUser.membership_id);
  }

  // Reservation
  // book trip
  reservationData(currentItem:any) {
    let data = {
      "booking": {
        "membership_id": this.global.enginnerUser.membership_id,
        "fullname": this.global.enginnerUser.fullname,
        "property_unit": 1,
        "pricing": currentItem.id,
        "persons_no": null
      }
    }

    this.getReservationCode(data);
  }

  // get reservation code
  getReservationCode(data: any) {
    this.http.post(this.bookingUrl, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(
      (res: any) => {
        console.log("Reservation Code: " , res);

        let payment = 
        {
          "payment_method": "card",
          "nequabty_member_id": res.booking.membership_id,
          "amount": res.booking.price,
          "payment_request_number": res.booking.id,
          "service_code": "s0004",
          "payment_source": "web",
          "signature": sha256(String("s0004" + res.booking.price + res.booking.membership_id))
        }

        this.getPaymentToken(payment);      
      },
      (err: any) => {
        console.log("Error: ", err);
      }
    )
  }

  // get payment token
  getPaymentToken(payment:any){
    this.http.post(this.paymentUrl , payment , {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(
      (res:any) => {
        console.log("Payment Token: " , res);
        this.openIframe(res.token);
      }
    )
  }

  // open COWPAY iFrame for reserving
  openIframe(token:any){
    COWPAYOTPDIALOG.init();
    COWPAYOTPDIALOG.load(token);
  }

  // payment function to book trip offer
  pay(){
    let tripData = 
    {
      "booking": {
        "membership_id": "40",
        "fullname": this.global.enginnerUser.fullname,
        "property_unit": 1,
        "pricing": this.pricingID,
        "persons_no": null
      }
    }

    this.router.navigate(['/payment',JSON.stringify(tripData)]);
  }
}
