import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  // cities
  cities = 
  [
    {
      id: 1,
      name: "القاهرة"
    },
    {
      id: 2,
      name: "الأسكندرية"
    },
    {
      id: 3,
      name: "شرم الشيخ"
    },
    {
      id: 4,
      name: "الغردقة"
    }
  ]

  // trips
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
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
