import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  totalPagesNumber = 5;
  
  constructor() { }

  ngOnInit(): void {
  }

}
