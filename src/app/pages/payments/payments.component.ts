import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  firstStep = true;
  secondStep = false;
  thirdStep = false;
  lastStep = false;

  firstStepForm = new FormGroup({
    mobileNumber : new FormControl('' , Validators.required),
    email : new FormControl('' , Validators.required),
    paymentMethod : new FormControl('' , Validators.required)
  })

  secondStepForm = new FormGroup({
    nationalNumber : new FormControl('' , Validators.required),
    bankCardNumber : new FormControl('' , Validators.required),
    paymentMethod : new FormControl('' , Validators.required)
  })

  thirdStepForm = new FormGroup({
    nationalNumber : new FormControl('' , Validators.required),
    bankCardNumber : new FormControl('' , Validators.required)
  })

  breadcrumb = [
    {
      id: 1,
      title: "الرئيسية",
      route: "/home"
    },
    {
      id: 2,
      title: "المدفوعات",
      route: "/payments"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  nextStep(currentStep : any){
    if(currentStep == 1){
      this.firstStep = true;
      this.secondStep = false;
      this.thirdStep = false;
    }
    else if(currentStep == 2){
      this.firstStep = false;
      this.secondStep = true;
      this.thirdStep = false;
    }
    else if(currentStep == 3){
      this.firstStep = false;
      this.secondStep = false;
      this.thirdStep = true;
    }
    else if(currentStep == 'last'){
      this.firstStep = false;
      this.secondStep = false;
      this.thirdStep = false;
      this.lastStep = true;
    }
  }
}
