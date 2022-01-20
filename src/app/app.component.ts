import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Global } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userLogged : any;    // check user is guest or logged
  userView : any;  // show header and footer
  
  constructor(private router: Router , private global : Global) {
    this.userLogged = this.global.userLogged;
    this.userView = this.global.userView;

    // on route change to '/login' or '/createAccount' or 'forgetPassword', set the variable pageVisible to false to hide header and footer
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/createAccount' || event['url'] == '/forgetPassword') {
          this.userView = false;
        }
      }
    });

  }

  ngOnInit(): void {
  }
}
