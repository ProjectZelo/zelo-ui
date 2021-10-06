import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ApiService } from 'src/app/api-store/services/api.service';
import { encryptedResponse } from 'src/app/data/mockApi';
import { creditCardInfo, PaymentMethod } from 'src/app/model/payment.model';

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
  selectedValue: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,

  ]);

  matcher = new MyErrorStateMatcher();
  creditCardInfo = new creditCardInfo();
  cardNumber: number;
  ccv: number;
  publicKey: string;

  constructor(private apiService: ApiService) { }

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
    // TODO: mocking the encryped response for now
    // this.apiService.getEncryptednumber().subscribe(respose => 
    //   {
    //     const encryptedData = respose
    //     console.log('enc', respose);
    //   })

    const encryptedData = encryptedResponse;
    this.publicKey = encryptedData.data.publicKey;
    console.log('resE', encryptedData);

  }

  CCInputChange($event: Event) {

  }

  submit() {
    // TODO: need to do credicard encrypt to sent the encriptedData
    console.log('cardNum', this.creditCardInfo);
  }
}

