import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../../global';

// swiper
import { SwiperOptions } from 'swiper';
// hashing
import { sha256 } from 'js-sha256';

declare var COWPAYIFRAMEDIALOG: any;
declare var COWPAYOTPDIALOG: any;

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})

export class OffersComponent implements OnInit {

  coursesUrl = 'https://courses.ese.et3.co/api/courses/';
  offersUrl = 'https://courses.ese.et3.co/api/offers';
  reservationUrl = 'https://courses.ese.et3.co/api/reservations';
  paymentUrl = 'https://wallet.ese.et3.co/api/testpay';
  courseId : any;
  coursesOffers: any;
  allCourses : any;
  courseContent = false;
  noOffers : any;
  users : any;
  reserveCourse : any;

  // Reserve Course Form Validation
  reserveCourseForm = new FormGroup({
    studentName: new FormControl({value: '' , disabled: true} , [Validators.required]),
    email: new FormControl({value: '' , disabled: true} , [Validators.required]),
    offerName: new FormControl({value: '' , disabled: true} , [Validators.required]),
    cost: new FormControl({value: '' , disabled: true} , [Validators.required])
  });

  // filter course days
  coursesDay: any = {
    6: 'Saturday',
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
  }

  // swiper config
  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  };

  constructor(private http: HttpClient , private route: ActivatedRoute , private router : Router , private global : Global) {}
  
  ngOnInit(): void {
    // get course id from url
    this.courseId = this.route.snapshot.paramMap.get('id');

    // check to show all offers or current course offers
    if(this.courseId){
      this.getOffersByCourseId(this.courseId);
      this.getCurrentCourse(this.courseId);

      this.courseContent = true;
    }
    else{
      this.getOffers();
      this.courseContent = false;
    }  
  }

  // get current course
  getCurrentCourse(courseId:any) {
    this.http.get(this.coursesUrl + courseId).subscribe(
      (res : any) => {
        this.allCourses = res.course;
      },
      (err : any) =>{
        console.log("Error: " , err);
      }
    )
  }

  // get all offers
  getOffers() {
    this.http.get(this.offersUrl).subscribe(
      (res : any) => {
        this.coursesOffers = res.course_offers;

        // check if there offers
        if(this.coursesOffers.length == 0){
            this.noOffers = true;
        }
        else{
            this.noOffers = false;
        }
      },
      (err : any) =>{
        console.log("Error: " , err);
      }
    )
  }

  // get offers for current course
  getOffersByCourseId(courseId : any) {
    this.http.get(this.offersUrl + "?format=json&filter{course.id}=" + courseId).subscribe(
      (res : any) => {
        this.coursesOffers = res.course_offers;

        // check if there offers
        if(this.coursesOffers.length == 0){
            this.noOffers = true;
        }
        else{
            this.noOffers = false;
        }
      },
      (err : any) =>{
        console.log("Error: " , err);
      }
    )
  }

  // get current offer details modal
  getOfferDetails(items:any){
    this.reserveCourse = items;

    // set values to reserve course form
    this.reserveCourseForm.controls.studentName.setValue(this.global.enginnerUser.fullname);
    this.reserveCourseForm.controls.email.setValue(this.global.enginnerUser.email);
    this.reserveCourseForm.controls.offerName.setValue(this.reserveCourse.title);
    this.reserveCourseForm.controls.cost.setValue(this.reserveCourse.pricings[0].price);
  }

  // payment function to book course offer
  pay(){
    let offerData = 
    {
      "course_reservation": {
        "student": {
        "name": "Mohamed Refaat",
        "nequabty_id": 40
        },
        "offer": this.reserveCourse.id
        }
    }

    this.router.navigate(['/payment',JSON.stringify(offerData)]);
  }
}
