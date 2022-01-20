import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Global } from 'src/app/global';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogged : any;    // check user is guest or logged

  loginForm = new FormGroup({
    username : new FormControl('' , Validators.required),
    password : new FormControl('' , Validators.required)
  });

  constructor(private router : Router , private global : Global) {
    this.userLogged = this.global.userLogged;
  }

  ngOnInit(): void {
  }


  login(){
    this.router.navigate(["/home"]);
    this.global.userLogged = true;
    this.global.userView = true;
  }
}
