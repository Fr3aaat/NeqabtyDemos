import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm = new FormGroup({
    forgetPassword : new FormControl('' , Validators.required)
  });
  
  constructor() { }

  ngOnInit(): void {
  }

}
