import {EventEmitter, Injectable} from '@angular/core'
import { LoggingService } from "./logging/logging.service";

// Add injectable in order to inject the logging service into the account service properly only add if you expect something to be injected
// currently recommended to add @Injectable. Causes a breaking change if ti doesn't
@Injectable()
export class AccountService{
  accounts =[
    {
    name: 'Master Account',
    status: 'active'
  },
  {
    name: 'Testaccount',
    status: 'inactive'
  },
  {
    name: 'Hidden Account',
    status: 'unknown'
  }

];

constructor(private loggingService: LoggingService){}

addAccount(name: string, status: string){
  this.accounts.push({
    name: name, status: status
  })
  this.loggingService.logStatusChange(status);
}

updateStatus(id: number, status: string){
  this.accounts[id].status = status;
  this.loggingService.logStatusChange(status);
}

statusUpdated = new EventEmitter<string>();

}
