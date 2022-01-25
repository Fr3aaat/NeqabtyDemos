import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadcrumb : any;

  constructor() { }

  ngOnInit(): void {
  }

}
