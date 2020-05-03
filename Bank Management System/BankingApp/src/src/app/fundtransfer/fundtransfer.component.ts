import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FundtransferService } from './fundtransfer.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css'],
  providers:[FundtransferService]
})
export class FundtransferComponent implements OnInit {

  fundTransferForm:FormGroup;
  submitted:boolean=false;
  update:number;
  updatedBalance:string;
  transferAmount:string;
  transaction:Transaction=new Transaction();
  receiverTransaction:Transaction=new Transaction();
  //receiverbalance:string;
  constructor(private router:Router,private formBuilder:FormBuilder,private fundService:FundtransferService,public dataService:DataService) { }

  ngOnInit() {

    
    this.fundTransferForm=this.formBuilder.group({

      transferAmount:["",[Validators.required ,Validators.pattern('[0-9]{1,}')]],
      transferAccountId:["",[Validators.required ,Validators.pattern('[0-9]{1,}')]],


  });

  this.fundService.getCurrentBalance(this.dataService.accountId).subscribe(

    data=>{

      this.dataService.balance=data;

    }

  );
  

  }
  get state(){
    return this.fundTransferForm.controls;
  }
  
  gotoMenu(){
    this.router.navigate(['/menu']);
  }
  onSubmit(){

    this.submitted=true;
    if(this.fundTransferForm.invalid){
      return;
    }
    else if(this.dataService.accountId===this.fundTransferForm.get('transferAccountId').value){
      alert("Transferring account id is same to your account id.");
    }
    else{

      this.fundService.getCurrentBalance(this.fundTransferForm.get('transferAccountId').value).subscribe(

        data=>{
    
          this.dataService.receiverBalance=data;
          console.log(this.dataService.receiverBalance);
          this.transaction.transactionId=0;
          this.transaction.accountId=parseInt(this.dataService.accountId);
          this.transaction.transferaccountid=parseInt(this.fundTransferForm.get('transferAccountId').value);
          this.transaction.type="Debit";
          this.transaction.transactiondate=null;
          //this.transaction.amount=this.depositForm.get('depositAmount').value;
    
          this.transferAmount=this.fundTransferForm.get('transferAmount').value;
    
          this.update=parseInt(this.dataService.balance)-parseInt(this.transferAmount);
          if(this.update<500){
            alert("Insufficient balance in your account to transfer.");
          }else{
    
          this.updatedBalance=(this.update).toString();
          this.transaction.updatedamount=this.updatedBalance;
          this.transaction.amount=this.fundTransferForm.get('transferAmount').value;
    
          this.dataService.balance=this.updatedBalance;
          console.log("hello");
          this.fundService.getAccountBalance(this.transaction).subscribe(
    
              data=>{
    
                  this.updatedBalance=data;
                  alert("Amount is transferred successfully "+ "and your current balance is: "+this.updatedBalance);
                  this.receiverTransaction.transactionId=0;
          this.receiverTransaction.accountId=parseInt((this.fundTransferForm.get('transferAccountId').value));
          this.receiverTransaction.transferaccountid=parseInt(this.dataService.accountId);
          this.receiverTransaction.type="Credit";
          this.receiverTransaction.transactiondate=null;
          //this.transaction.amount=this.depositForm.get('depositAmount').value;
    
          this.transferAmount=this.fundTransferForm.get('transferAmount').value;
          
              console.log(this.dataService.receiverBalance);
          this.update=parseInt(this.transferAmount)+parseInt(this.dataService.receiverBalance);
          this.updatedBalance=(this.update).toString();
          this.receiverTransaction.updatedamount=this.updatedBalance;
          this.receiverTransaction.amount=this.fundTransferForm.get('transferAmount').value;
    
          this.dataService.receiverBalance=this.updatedBalance;
          this.fundService.transferBalance(this.receiverTransaction).subscribe(
    
              data=>{
    
                  this.updatedBalance=data;
                  //alert("Amount is deposited successfully "+ "and your current balance is: "+this.updatedBalance);
                  
              }
    
    
    
    
          );
              }
    
    
    
    
          );
    
          
    
    
    
    
    
    
    
    
          }
          this.router.navigate(['/menu']);
        }
        
    
      );
     
     
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
