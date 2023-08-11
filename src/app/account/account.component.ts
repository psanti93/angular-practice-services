import { Component, Input, inject} from '@angular/core';
import { LoggingService } from '../logging/logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountService: AccountService){
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id,status);
    this.accountService.statusUpdated.emit(status);
  }
}
