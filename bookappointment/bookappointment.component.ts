import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  eventDescId: any
  eventId:any
  eventDetails:any
  eventDesc:any
  clicked = false
  constructor( private clientService : ClientService,
               private router : Router) { }

  ngOnInit() {
    this.eventDescId = JSON.parse(localStorage.getItem("eventDescId"))
    console.log(this.eventDescId)
    this.eventDetails = JSON.parse(localStorage.getItem("eventDetails"))
    console.log(this.eventDetails.eventId)

    let obResult = this.clientService.getEventDescById(this.eventDescId)
    obResult.subscribe((data)=>{
      this.eventDesc = data;
      console.log(this.eventDesc.mgr.managerId)
    })
  }
  onSendAway(entireData)
  {
    let value = entireData.form.value;
    
    let obResult = this.clientService.bookAnAppointment(this.eventDetails.eventId,this.eventDesc.mgr.managerId,value);
            obResult.subscribe((data)=>{
              console.log(data);
              this.router.navigate(['/after-book-event']);
            })            
  }
  onClick()
  {
    
  }
}
