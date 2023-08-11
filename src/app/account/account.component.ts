import { Component, Input, inject} from '@angular/core';
import { LoggingService } from '../logging/logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  private loggingService ?: LoggingService;
  constructor(private accountService: AccountService){
    this.loggingService = inject(LoggingService);
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id,status)
    this.loggingService.logStatusChange(status)
  }
}
