import { add } from "lodash";

export interface PaymentMethod {
    type: string;
    value: string;
    disable: boolean;
}

export class creditCardInfo {
    idempotencyKey: number;
     expMonth: number;
     expYear: number;
     keyId: string;
     encryptedData: string;
     billingDetails: {
         address: string
     };
     metadata: {
       email: string;
       phoneNumber: any;
       sessionId: string;
       ipAddress: number;
     }
     constructor(idempotencyKey = 0, expMonth = 0, expYear = 0, keyId = '', encrypedData = '', billingDrtails= { address : ''}, address = '', metadata = {email: '', phoneNumber: '', sessionId: '', ipAddress: 0},
     email = '', phoneNumber = null, sessionId= 'xxxx', ipAddress = 0) {
         this.idempotencyKey = idempotencyKey;
         this.expMonth = expMonth;
         this.keyId = keyId;
         this.encryptedData = encrypedData;
         this.billingDetails = billingDrtails;
        this.billingDetails.address = address;
        this.metadata = metadata;
        this.metadata.email = email;
        this.metadata.phoneNumber = phoneNumber;
        this.metadata.sessionId = sessionId;
        this.metadata.ipAddress = ipAddress;


     }
}