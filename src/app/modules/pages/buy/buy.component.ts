import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PaymentMethod } from 'src/app/model/payment.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'zelo-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  paymentMethod: Array<PaymentMethod>;
  isSelected: boolean = false;
  value: string;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
    this.setPaymentOptions();
  }
  setPaymentOptions() {
    this.paymentMethod = [{
      type: "Select",
      value: "none",
      disable: true
    },
    {
      type: "Credit Card",
      value: "CC",
      disable: false
    },
    {
      type: "Debit Card",
      value: "DC",
      disable: false
    }
    ]
  }

  ChangingValue(e: Event) {
    this.isSelected = true;
  }

  CCInputChange($event: Event) {

  }
}
