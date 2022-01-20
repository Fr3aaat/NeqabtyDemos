import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // step:1 - Register Form form
  registerForm = new FormGroup({
    userName : new FormControl('' , Validators.required),
    nationalNumber : new FormControl('' , Validators.required),
    membershipNumber : new FormControl('' , Validators.required),
    registrationNumber : new FormControl('' , Validators.required),
    subscriptionYear : new FormControl('' , Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
