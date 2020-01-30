import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http : HttpClient) { }

  getAllAppointment()
  {
    return this.http.get("http://localhost:8080/Day1.1/manager/getallappointments")
  }
  listEvents()
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listevents")
  }
  
}
