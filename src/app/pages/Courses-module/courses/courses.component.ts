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

  serviceUrl = 'https://courses.ese.et3.co/api/courses';

  courses : any;

  constructor(private http : HttpClient) {

  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.http.get(this.serviceUrl).subscribe(
      (res : any)=>{
        console.log(res);
        this.courses = res.courses;
      },
    )
  }
}
