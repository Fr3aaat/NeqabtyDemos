import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trips-cards',
  templateUrl: './trips-cards.component.html',
  styleUrls: ['./trips-cards.component.scss']
})
export class TripsCardsComponent implements OnInit {

  @Input() tripsList : any;

  constructor() { }

  ngOnInit(): void {
  }

}
