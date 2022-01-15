import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// hashing
import { sha256 } from 'js-sha256';
import { ActivatedRoute } from '@angular/router';

declare var COWPAYIFRAMEDIALOG: any;
declare var COWPAYOTPDIALOG: any;

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  reservationUrl = 'https://courses.ese.et3.co/api/reservations/';
  bookingUrl = 'https://trips.ese.et3.co/api/bookings/';
  paymentUrl = 'https://wallet.ese.et3.co/api/testpay';
  reserveCourse : any;
  paymentData : any;
  paymentMethodValue : any;
  fawryPaymentCode = false;

  paymentForm = new FormGroup ({
    paymentMethod: new FormControl ('' , Validators.required)
  });

  constructor(private http: HttpClient , private route : ActivatedRoute ) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('data');

    if(param){
      this.paymentData = JSON.parse(param);
    }
  }

  formSubmit(){
    if(this.paymentForm.valid){
      this.paymentMethodValue = this.paymentForm.controls.paymentMethod.value;

      if(this.paymentData.course_reservation){
        this.getReservationCode(this.paymentData , this.paymentMethodValue);
      }
      if(this.paymentData.booking){
        this.getBookingCode(this.paymentData , this.paymentMethodValue);
      }
    }
  }

  // get reservation code for book course
  getReservationCode(data: any , paymentMethod : any) {
    this.http.post(this.reservationUrl, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(
      (res: any) => {
        console.log("Reservation Code: " , res);

        let payment = 
        {
          "payment_method": paymentMethod,
          "nequabty_member_id": res.student.nequabty_id,
          "amount": res.cost,
          "payment_request_number": res.id,
          "service_code": "s00001",
          "payment_source": "web",
          "signature": sha256(String("s00001" + res.cost + res.student.nequabty_id))
        }

        this.getPaymentToken(payment);      
      },
      (err: any) => {
        console.log("Error: ", err);
      }
    )
  }

  // get reservation code for book trip
  getBookingCode(data: any , paymentMethod : any) {
    this.http.post(this.bookingUrl, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(
      (res: any) => {
        console.log("Reservation Code: " , res);

        let payment = 
        {
          "payment_method": paymentMethod,
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

        if(this.paymentMethodValue == "card"){
          console.log("CARD DONE");
          this.openIframe(res.token);
        }
        else if (this.paymentMethodValue == "fawry"){
          this.fawryPaymentCode =  res.payment_gateway_reference_id;

          document.getElementById("fawry-payment-btn")?.click();
          console.log("FAWRY DONE" , this.fawryPaymentCode);
        }
        else if (this.paymentMethodValue == "wallet"){
          console.log("WALLET DONE");
        }
      }
    )
  }

  // open COWPAY iFrame for reserving
  openIframe(token:any){
    COWPAYOTPDIALOG.init();
    COWPAYOTPDIALOG.load(token);
  }

  // copy code to clipboard
  copyCode(codeInput:any){
    codeInput.select();
    codeInput.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(codeInput.value);
  }
}