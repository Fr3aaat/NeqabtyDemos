import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userLogged : any;

  // advertisements obj
  advertisements = 
  [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/1920x840",

      link: "https://www.google.com.eg/"
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/1200x525",
      link: "https://www.google.com.eg/"
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/1360x595",

      link: "https://www.google.com.eg/"
    }
  ]

  // actors obj
  actors = 
  [
    {
      id: 1,
      imageUrl: "assets/images/neqaba-1.png",
      name: "نقابة المهندسين",
    },
    {
      id: 2,
      imageUrl: "assets/images/neqaba-2.png",
      name: "نقابة الاطباء"
    },
    {
      id: 3,
      imageUrl: "assets/images/neqaba-3.png",
      name: "نقابة المرشدين السياحين"
    },
    {
      id: 4,
      imageUrl: "assets/images/neqaba-4.png",
      name: "نقابة المحاسبين"
    },
    {
      id: 5,
      imageUrl: "assets/images/neqabty-logo.png",
      name: "نقابة المعلمين"
    },
    {
      id: 5,
      imageUrl: "assets/images/we.jpg",
      name: "نقابة المهنينين"
    },
  ]

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
      imageUrl: "assets/images/offers-banner.jpg",
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

  // courses obj
  courses = 
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

  // trips obj
  trips = 
  [
    {
      id: 1,
      imageUrl: "assets/images/trips-banner.jpg",
      name: "مصيف المعمورة",
      description: "يُعد شاطئ المعمورة أحد أهم وأفضل شواطئ الاسكندرية التي توفر لزوارها من النخبة قدر كبير من التميُّز والمُتعة والخصوصية ",
      location: "مرسى مطروح عمارات الريم خلف الشبراوى",
      notes: "تبعد عن البحر 10 متؤ"
    },
    {
      id: 1,
      imageUrl: "assets/images/trips-banner.jpg",
      name: "مصيف الشطبى",
      description: "يُعد شاطئ المعمورة أحد أهم وأفضل شواطئ الاسكندرية التي توفر لزوارها من النخبة قدر كبير من التميُّز والمُتعة والخصوصية ",
      location: "مرسى مطروح عمارات الريم خلف الشبراوى",
      notes: "تبعد عن البحر 10 متؤ"
    },
    {
      id: 1,
      imageUrl: "assets/images/trips-banner.jpg",
      name: "مصيف المعمورة",
      description: "يُعد شاطئ المعمورةة ",
      location: "مرسى مطروح عمارات الريم خلف الشبراوى",
      notes: "تبعد عن البحر 10 متؤ"
    },
    {
      id: 1,
      imageUrl: "assets/images/trips-banner.jpg",
      name: "مصيف المعمورة",
      description: "يُعد شاطئ المعمورة أحد أهم وأفضل شواطئ الاسكندرية التي توفر لزوارها من النخبة قدر كبير من التميُّز والمُتعة والخصوصية ",
      location: "مرسى مطروح عمارات الريم خلف الشبراوى",
      notes: "تبعد عن البحر 10 متؤ"
    },
  ]

  constructor(private global : Global) {
    this.userLogged = this.global.userLogged;
  }

  ngOnInit(): void {
  }

}
