import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  events : any
  constructor(private service : ManagerService) { }

  ngOnInit() {
    let observableResult = this.service.listEvents();
    observableResult.subscribe((data)=>{
      console.log(data)
      this.events = data;
    })
  }

}
