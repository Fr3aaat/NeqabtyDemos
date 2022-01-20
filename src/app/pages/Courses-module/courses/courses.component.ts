import {
  Component,
  OnInit
} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // courses
  courses = 
  [
    {
      id: 1,
      name: "كورس تنميه بشريه"
    },
    {
      id: 2,
      name: "UIUX Design"
    },
    {
      id: 3,
      name: "علوم البيئه"
    },
    {
      id: 4,
      name: "Angular"
    }
  ]

  // level
  level = 
  [
    {
      id: 1,
      name: "مبتدى"
    },
    {
      id: 2,
      name: "متوسط"
    },
    {
      id: 3,
      name: "خبير"
    }
  ]

  // offers
  offers = 
  [
    {
      id: 1,
      imageUrl: "assets/images/trips-banner.jpg",
      title: "كورس تنمية بشرية",
      sessionNum: "12"
    },
    {
      id: 2,
      imageUrl: "assets/images/offers-banner.jpg",
      title: "كورس تنمية بشرية",
      sessionNum: "30"
    },
    {
      id: 3,
      imageUrl: "assets/images/trips-banner.jpg",
      title: "كورس تنمية بشرية",
      sessionNum: "8"
    },
    {
      id: 4,
      imageUrl: "assets/images/offers-banner.jpg",
      title: "كورس تنمية بشرية",
      sessionNum: "5"
    },
    {
      id: 5,
      imageUrl: "assets/images/trips-banner.jpg",
      title: "كورس تنمية بشرية",
      sessionNum: "21"
    }
  ]

  // serviceUrl = 'https://courses.ese.et3.co/api/courses';

  // courses : any;

  constructor(private http : HttpClient) {

  }

  ngOnInit(): void {
    // this.getCourses();
  }

  // getCourses(){
  //   this.http.get(this.serviceUrl).subscribe(
  //     (res : any)=>{
  //       console.log(res);
  //       this.courses = res.courses;
  //     },
  //   )
  // }
}
