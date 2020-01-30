import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointment : any

  constructor( private managerService : ManagerService,
               private route : Router ) { }

  ngOnInit() {
    let obResult = this.managerService.getAllAppointment()
    obResult.subscribe((data)=>{
      console.log(data)
      this.appointment = data;
    })
  }

}
