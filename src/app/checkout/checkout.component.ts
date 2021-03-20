import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  showIndex:number=1;
  
  //Dummy payload
  payload = [
    {
      imageUrl:"https://pixy.org/src/92/923095.jpg",
      title:"T-shirt",
      quantity:5,
      totalPrice:100
    },
    {
      imageUrl:"https://pixy.org/download/739864/",
      title:"Red long sleeves",
      quantity:5,
      totalPrice:100
    },
    {
      imageUrl:"https://pixahive.com/wp-content/uploads/2020/10/Black-Sweat-Shirt-Backside-131700-pixahive.jpg",
      title:"Black long sleeves",
      quantity:5,
      totalPrice:100
    },
  ]

  constructor(private pmtService:PaymentService) {  }

  ngOnInit(): void {
  }

  changeIndex(num:number){
    this.showIndex=num;
  }

  makePayment(amount:number, formdata){
    if(this.showIndex==1) this.pmtService.cardPayment(amount,formdata).subscribe(x=>console.log(x));
    if(this.showIndex==2) this.pmtService.bankPayment(amount,formdata).subscribe(x=>console.log(x));
    if(this.showIndex==3) this.pmtService.momoPayment(amount,formdata).subscribe(x=>console.log(x));
  }

}
