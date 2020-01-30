import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-insert-food-type',
  templateUrl: './insert-food-type.component.html',
  styleUrls: ['./insert-food-type.component.css']
})
export class InsertFoodTypeComponent implements OnInit {

  constructor(private router:Router,
    private adminService:AdminService) { }


ngOnInit() {
}

onInsert(entireData)
{
console.log("In OnInsert foodType method"); 
let foodtype = entireData.form.value;
console.log(foodtype.event);

let observableResult =  this.adminService.insertFoodType(foodtype);
observableResult.subscribe((data)=>{
console.log(data);
this.router.navigate(['/list-food-type']);
})
}

}
