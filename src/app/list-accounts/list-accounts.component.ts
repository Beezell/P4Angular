import { Component } from '@angular/core';
import { Account } from '../model/account.model';
import { AccountService } from '../services/accounts.service';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent {

  accounts!: Account[];

  constructor(private accountService: AccountService){}

  ngOnInit(): void{
    this.fetchAccount();
  }


  private fetchAccount() {
    this.accountService.getAccountsApi().subscribe({
      next: (response: Account[]) => {
        this.accounts = response;
      },
      error: (error) => {
        console.log("Error sur le fetch des accounts : " + error);
      }
    });
  }

  deleteAccount(idAccount: Number){
    this.accountService.deleteAccountApi(idAccount).subscribe({
      next:() => {
        this.fetchAccount();
      },
      error:(error) => {
        console.log("Error suppression de account: " + error);
      }
    })
  }
  

}
