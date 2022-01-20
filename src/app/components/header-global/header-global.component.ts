import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-global',
  templateUrl: './header-global.component.html',
  styleUrls: ['./header-global.component.scss']
})
export class HeaderGlobalComponent implements OnInit {

  // actors obj
  actorsList = 
  [
    {
      id: 1,
      imageUrl: "assets/images/neqabty-logo.png",
      name: "نقابة المهندسين",
    },
    {
      id: 2,
      imageUrl: "assets/images/we.jpg",
      name: "نقابة الاطباء"
    },
    {
      id: 3,
      imageUrl: "assets/images/neqabty-logo.png",
      name: "نقابة المرشدين السياحين"
    },
    {
      id: 4,
      imageUrl: "assets/images/we.jpg",
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
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
