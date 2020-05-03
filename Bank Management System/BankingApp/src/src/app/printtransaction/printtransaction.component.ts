import { Component, OnInit } from '@angular/core';
import{TransactionService} from '../printtransaction/transaction.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-printtransaction',
  templateUrl: './printtransaction.component.html',
  styleUrls: ['./printtransaction.component.css'],
  providers:[TransactionService]
})
export class PrinttransactionComponent implements OnInit {

  transactionList:TransactionDetail[];
  constructor(private transaction:TransactionService,public dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.transaction.getAllTransactionDetails(this.dataService.accountId).subscribe(
      data=>{

        this.transactionList=data;
        if(this.transactionList.length===0){
          alert("No transaction to print.");
        }
      }


    );
  }

  gotoMenu(){
    this.router.navigate(['/menu']);
  }
  
}



export class TransactionDetail{

  transactionId:number;
  accountId:number;
  transferaccountid:number;
  transactiondate:Date;
  type:string;
  updatedamount:string;
  amount:string;

}
