import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent implements OnInit{
  // initialize an array
  accounts: {name : string, status: string}[] = [];
  constructor(private accountsService: AccountService){ // app component receives it's own instance of Account Service

  }
  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}
