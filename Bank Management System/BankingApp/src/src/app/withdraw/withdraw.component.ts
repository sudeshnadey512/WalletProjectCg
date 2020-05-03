import { Component, OnInit } from '@angular/core';
import {WithdrawService} from '../withdraw/withdraw.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
  providers:[WithdrawService]
})
export class WithdrawComponent implements OnInit {

  withdrawForm:FormGroup;
  submitted:boolean=false;
  transaction:Transaction=new Transaction();
  update:number;
  updatedBalance:string;
  withdrawAmount:string;
  constructor(private formBuilder: FormBuilder,private router:Router,public dataService: DataService,private withdrawService:WithdrawService) { }

  ngOnInit() {

    this.withdrawService.getCurrentBalance(this.dataService.accountId).subscribe(

      data=>{

        this.dataService.balance=data;

      }

    );
    this.withdrawForm=this.formBuilder.group({

      withdrawAmount:["",[Validators.required ,Validators.pattern('[0-9]{1,}')] ],

  });
  }
  get state(){
    return this.withdrawForm.controls;
  }
  gotoMenu(){
    this.router.navigate(['/menu']);
  }
  onSubmit(){

    this.submitted=true;
    if(this.withdrawForm.invalid){
      return;
    }else{
      this.transaction.transactionId=0;
      this.transaction.accountId=parseInt(this.dataService.accountId);
      this.transaction.transferaccountid=parseInt(this.dataService.accountId);
      this.transaction.type="Debit";
      this.transaction.transactiondate=null;
      //this.transaction.amount=this.depositForm.get('depositAmount').value;

      this.withdrawAmount=this.withdrawForm.get('withdrawAmount').value;

      this.update=parseInt(this.dataService.balance)-parseInt(this.withdrawAmount);
      if(this.update<500){
        alert("Insufficient balance in your account for this transaction.");
      }else{

        this.updatedBalance=(this.update).toString();
      this.transaction.updatedamount=this.updatedBalance;
      this.transaction.amount=this.withdrawForm.get('withdrawAmount').value;

      this.dataService.balance=this.updatedBalance;
      console.log("hello");
      this.withdrawService.getAccountBalance(this.transaction).subscribe(

          data=>{

              this.updatedBalance=data;
              alert("Amount is withdrawn successfully "+ "and your current balance is: "+this.updatedBalance);
              this.router.navigate(['/menu']);
          }




      );




      }

      
     

     
    }
  }


}


export class Transaction{

  transactionId:number;
  accountId:number;
  transferaccountid:number;
  transactiondate:Date;
  type:string;
  updatedamount:string;
  amount:string;

}
