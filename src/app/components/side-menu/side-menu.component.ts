import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() menuList : any;
  @Input() levelList : any;

  constructor() { }

  ngOnInit(): void {
  }

  collapseItems(e: any){
    console.log("ERROR: " , e)
    e.preventDefault();
    e.stopPropagation();
  }
}
