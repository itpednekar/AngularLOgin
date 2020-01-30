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
  food : any
  foodSubMenu : any
  eventDescId : any
  myDetails : any
  locationId : any
  foodId : any
  theme :any;
  musicSystem:any
  totalCost : any
  foodPojo : any
  eventDescPojo : any
  locationPojo : any


  constructor(private router : Router,
              private clientService : ClientService) { }

  ngOnInit() {

    this.myDetails = JSON.parse(localStorage.getItem('myDetails'));

   
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
    
    let obResultOfFood = this.clientService.getListOfFood();
    obResultOfFood.subscribe((data)=>{
      console.log(data)
      this.food = data
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

  onSelectFoodType(event)
  {
    this.foodId = event.target.value
    console.log(this.foodId)
  }

  onSelectEvent(event)
  {
      this.eventDescId = event.target.value;
      console.log(this.eventDescId)
      localStorage.setItem('eventDescId',JSON.stringify(event.target.value))
  }
  onSelectLocation(event)
  {
    this.locationId =  event.target.value
    console.log("location id : "+this.locationId)
  }
  
  onSelectTheme(event)
  {
    this.theme = event.target.value;
    console.log(this.theme);
  }

  onSelectMusicSystem(event)
  {
    this.musicSystem = event.target.value;
    console.log(this.musicSystem);
  }

  onAdd(entireData)
  {
     let event = entireData.form.value;
     event.musicSystem = this.musicSystem
     event.theme = this.theme

     console.log(event)
     let obResult = this.clientService.bookAnEvent(this.myDetails.userId,
                                                   this.eventDescId,this.locationId, this.foodId, event)
    obResult.subscribe((data)=>{
      console.log(data)
      localStorage.setItem("eventDetails", JSON.stringify(data))
      this.router.navigate(['/paymentdetails']);
    })

   
  }
}

