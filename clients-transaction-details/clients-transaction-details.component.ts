import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-transaction-details',
  templateUrl: './clients-transaction-details.component.html',
  styleUrls: ['./clients-transaction-details.component.css']
})
export class ClientsTransactionDetailsComponent implements OnInit {

  transaction : any
  constructor( private managerService : ManagerService,
                private router : Router) { }

  ngOnInit() {
    let obResult = this.managerService.getClientTransactionDetails()
    obResult.subscribe((data)=>{
      this.transaction = data
      console.log(data)
    })
  }

}
