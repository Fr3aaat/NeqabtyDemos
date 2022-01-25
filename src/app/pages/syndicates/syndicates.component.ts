import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'syndicates',
  templateUrl: './syndicates.component.html',
  styleUrls: ['./syndicates.component.scss']
})
export class SyndicatesComponent implements OnInit {

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

  breadcrumb = [
    {
      id: 1,
      title: "الرئيسية",
      route: "/home"
    },
    {
      id: 2,
      title: "النقابات",
      route: "/syndicates"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
