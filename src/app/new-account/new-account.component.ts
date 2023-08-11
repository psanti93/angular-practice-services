import { Component } from '@angular/core';
import { LoggingService } from '../logging/logging.service';
import { AccountService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountService: AccountService){ // child component off app it's account service would override the account service instances we get from app component

  }

  // when we push a new account using account service's add account it's pushed on an instance of Account Service that's different than the one in app
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus)
    this.loggingService.logStatusChange(accountStatus)
  }
}
