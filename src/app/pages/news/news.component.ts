import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  filterInputs = false;

  breadcrumb = [
    {
      id: 1,
      title: "الرئيسية",
      route: "/home"
    },
    {
      id: 2,
      title: "الأخبار",
      route: "/news"
    }
  ]

  filterNewsForm = new FormGroup({
    search : new FormControl(''),
    actorFilter : new FormControl(''),
    startDate : new FormControl(''),
    endDate : new FormControl(''),
  })

  // news obj
  news = 
  [
    {
      id: 1,
      imageUrl: "assets/images/trips-banner.jpg",
      title: "بدون صلاح وماني.. ليفربول يعود للانتصارات بثلاثية أمام برينتفورد بالبريميرليج بدون صلاح وماني.. ليفربول يعود للانتصارات بثلاثية أمام برينتفورد بالبريميرليج بدون صلاح وماني.. ليفربول يعود للانتصارات بثلاثية أمام برينتفورد بالبريميرليج  بدون صلاح وماني.. ليفربول يعود للانتصارات بثلاثية أمام برينتفورد بالبريميرليج",
      date: "12 يناير 2022"
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/1920x840",
      title: "بخماسي أجنبي.. الزمالك يعلن قائمته لمونديال الأندية لكرة السلة",
      date: "12 يناير 2022"
    },
    {
      id: 3,
      imageUrl: "assets/images/trips-banner.jpg",
      title: "إيفرتون الإنجليزي يقيل بينيتز من تدريب الفريق",
      date: "12 يناير 2022"
    },
    {
      id: 4,
      imageUrl: "assets/images/offers-banner.jpg",
      title: "استعاد الأهلي أحمد عبد القادر وكريم فؤاد بعد شفائهما من الإصابة التي لحقت بهما وشارك في تدريبات الفريق الأحمر استعدادا لمواجهة الإسماعيلي غدا الاثنين ببطولة كأس الرابطة.",
      date: "12 يناير 2022"
    },
    {
      id: 5,
      imageUrl: "assets/images/trips-banner.jpg",
      title: "نقابة المعلمين",
      date: "12 يناير 2022"
    }
  ]

  totalPagesNumber = 5;

  showFilterItems(){
    this.filterInputs = !this.filterInputs;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
