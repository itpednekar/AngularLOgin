import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {

  eventDetails: any
  tranType:any
  constructor(private clientService : ClientService,
              private router:Router) { }

  ngOnInit() {

  this.eventDetails = JSON.parse(localStorage.getItem("eventDetails"))
  console.log(this.eventDetails)
  //this.transaction.totalCost = this.eventDetails.totalCost
  }

  makePayment(entireData)
  {
     let value = entireData.form.value;
    
      value.tranType = this.tranType 
      value.totalCost = this.eventDetails.totalCost;
      console.log(value.tranType);
      console.log(value.totalCost)
      console.log(this.eventDetails.eventId);
      let obResult = this.clientService.insertPaymentDetails(this.eventDetails.eventId, value)
      obResult.subscribe((data)=>{
        console.log(data)
        this.router.navigate(['/bookappointmnet']);
      })
  }
  onSelectPayment(event)
  {
      console.log(event.target.value)
      this.tranType = event.target.value;
      console.log(this.tranType)
  }

}
