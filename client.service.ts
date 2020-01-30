import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCATION_INITIALIZED } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 


  constructor(public http:HttpClient) { }

 

  Check(userdetails) 
  {
    console.log("in check")
    //console.log(userdetails)
    return this.http.post("http://localhost:8080/Day1.1/user/login",userdetails);
  }
  listFeedback()
  {
    return this.http.get("http://localhost:8080/Day1.1/client/listfeedback");
  }
  addAddress(userId, addr)
  {
    return this.http.put("http://localhost:8080/Day1.1/client/update/" + userId, addr);
  //return this.helper.put("http://localhost:9898/emps/" + empObj.No ,empObj);
  }
  insertUser(user)
  {
    return this.http.post("http://localhost:8080/Day1.1/client/register" ,user);
  }
  bookAnEvent(userId,eventDescId,locationId,foodId,event)
  {
    return this.http.post("http://localhost:8080/Day1.1/event/bookanevent/"+ 
                           userId + "/" + eventDescId +  "/"  + locationId + "/" + foodId, event);
  }
  getFoodByFoodId(foodId)
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/getfoodtypebyid/"+foodId)
  }
  getEventDescById(eventDescId)
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/geteventdescbyid/"+eventDescId)
  }
  getAllEventDesc()
  {
    return this.http.get("http://localhost:8080/Day1.1/client/listeventdesc");
  }
  getLocationByLocationId(locationId)
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/getlocationbyid/"+locationId)
  }
  getAllVenueCity()
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listvenuecity")
  }
  getLocationListByVenueCityId(venueCityId)
  {
    return this.http.get("http://localhost:8080/Day1.1/client/listlocationbyvenuecityid/"+venueCityId)
  }
  insertFeedback(userId, feedback)
  {
    return this.http.post("http://localhost:8080/Day1.1/client/insertfeedback/"+userId, feedback)
  }
  bookAnAppointment(eventId,managerId,appointment)
  {
    return this.http.post("http://localhost:8080/Day1.1/client/bookappointment/"+ eventId + "/" + managerId, appointment)
  }
  getListOfFood()
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listfoodtype")
  }
  getListOfFoodSubMenuByFoodId(foodId)
  {
    return this.http.get("http://localhost:8080/Day1.1/client/listoffoodsubmenubyfoodid/"+foodId)
  }
  updateEvent(event)
  {
    return this.http.post("http://localhost:8080/Day1.1/event/updateeventafterbooking" ,event );
  }
  insertPaymentDetails(eventId, tansaction)
  {
    return this.http.post("http://localhost:8080/Day1.1/event/paymentdetails/" + eventId, tansaction)
  }
}
