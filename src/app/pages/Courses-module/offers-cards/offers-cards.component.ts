import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'offers-cards',
  templateUrl: './offers-cards.component.html',
  styleUrls: ['./offers-cards.component.scss']
})
export class OffersCardsComponent implements OnInit {

  @Input() offersList : any;

  constructor() { }

  ngOnInit(): void {
  }

}
