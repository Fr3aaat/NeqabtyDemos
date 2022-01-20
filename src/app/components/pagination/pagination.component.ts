import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() totalPages : any;
  currentPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  nextPage(item:any){
    let pageNumber = item.target.innerText;
    this.currentPage == pageNumber;
  }
}
