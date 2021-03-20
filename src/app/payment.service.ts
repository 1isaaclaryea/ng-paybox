import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiEndpoint:string = "https://www.paybox.com.co/pay"
  private merchantID:string = "XXXXXX-XXXX-XXXXXX-XXXXXXXXX"
  constructor(private httpClient:HttpClient) { }

  // makePayment(mode:string,payAmount:number):Observable<any>{
  //   return this.httpClient.post(this.apiEndpoint,{
  //       "amount":payAmount,
  //       "currency":"GHS",
  //       "mode":mode,
  //       "mobile_network":"Mtn",
  //       "mobile_number":"+23359595334",
  //       "bank_name":"",
  //       "bank_account":1133,
  //       "bank_account_pin":12344,
  //       "card_number":1110001,
  //       "card_expiry":"03/02",
  //       "card_cvc":243
  //   },
  //   {
  //     headers: {
  //       "Authorization": "Bearer sk_test_5efb292fb522f2bb012c49afed1dba4b9e39d0d4",
  //       "Content-Type": "application/json",
  //     },
  //   })
  // }

  //function name should be verbs refactor!!!
  //DRY principle violated. Fix it!!! Refactor!!!

  momoPayment(payAmount:number,formData):Observable<any>{
    return this.httpClient.post(this.apiEndpoint,{},
    {
      headers: {
        // "Content-Type": "application/json",
        "Authorization": this.merchantID
      },
      params: {
        "amount":payAmount.toString(),
        "currency":"GHS",
        "mode":"Mobile Money",
        "mobile_network":formData.mobile_network,
        "mobile_number":formData.mobile_number,
      },
    })
  }

  bankPayment(payAmount:number,formData):Observable<any>{
    return this.httpClient.post(this.apiEndpoint,{ },
    {
      headers: {
        // "Content-Type": "application/json",
        "Authorization": this.merchantID
      },
      params: {
        "amount":payAmount.toString(),
        "currency":"GHS",
        "mode":"Bank",
        "bank_name":formData.bank_name,
        "bank_account":formData.bank_account,
        "bank_account_pin":formData.bank_account_pin,
      }
    })
  }

  cardPayment(payAmount:number,formData):Observable<any>{
    console.log(formData);
    return this.httpClient.post(this.apiEndpoint,{ },
    {
      headers: {
        // "Content-Type": "application/json",
        "Authorization": this.merchantID
      },
      params: {
        "amount":payAmount.toString(),
        "currency":"GHS",
        "mode":"Card",
        "card_number":formData.card_number,
        "card_type":"Visa",
        "card_name":formData.card_name,
        "card_expiry":formData.card_expiry,
        "card_cvc":formData.cvc
      }
    })
  }
}
