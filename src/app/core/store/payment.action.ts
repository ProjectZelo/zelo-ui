// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { PaymentMethod } from './../../model/payment.model'

// Section 2
export const ADD_PAYMENT = '[PAYMENT] Add'


// Section 3
export class AddPayment implements Action {
    readonly type = ADD_PAYMENT

    constructor(public payload: PaymentMethod) { }
}



// Section 4
export type Actions = AddPayment