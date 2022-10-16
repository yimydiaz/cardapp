import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Transaction[] | undefined;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions() {
    this.cardService.getListTransactions().subscribe(
      (response) => {
        
        this.transactions = response.resultado;
        console.log(this.transactions);
      });
  }

}
