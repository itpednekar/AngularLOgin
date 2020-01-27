import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bookanevent',
  templateUrl: './bookanevent.component.html',
  styleUrls: ['./bookanevent.component.css']
})
export class BookaneventComponent implements OnInit {

  eventDesc : any;
  event : any;
  venuCity : any;
  location : any;
  

  constructor(private router : Router,
              private clientService : ClientService) { }

  ngOnInit() {

   
    let obResult = this.clientService.getAllEventDesc()
    obResult.subscribe((data)=>{
      console.log(data)
      this.eventDesc = data;
    })

    let obResultOfvenueCity = this.clientService.getAllVenueCity()
    obResultOfvenueCity.subscribe((data)=>{
      console.log(data)
      this.venuCity = data;
    })

   
  }
  onChangeVenueCity(venueCityId: number)
  {
   let obResultOfLocations = this.clientService.getLocationListByVenueCityId(venueCityId);
   obResultOfLocations.subscribe((data)=>{
    console.log(data);
    this.location = data;
   })
  }

  

}

