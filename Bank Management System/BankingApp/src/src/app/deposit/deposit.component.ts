import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepositService } from './deposit.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
  providers:[DepositService]
})
export class DepositComponent implements OnInit {

  depositForm: FormGroup;
  submitted:boolean=false;
  transaction:Transaction=new Transaction();
  update:number;
  updatedBalance:string;
  depositAmount:string;
  constructor(private formBuilder: FormBuilder,public router:Router,public dataService:DataService,private depositService:DepositService) { }

  ngOnInit() {

    this.depositService.getCurrentBalance(this.dataService.accountId).subscribe(

      data=>{

        this.dataService.balance=data;

      }

    );
    this.depositForm=this.formBuilder.group({

      depositAmount:["",[Validators.required ,Validators.pattern('[0-9]{1,}')] ],

  });
  }
  get state(){
    return this.depositForm.controls;
  } 

  gotoMenu(){
    this.router.navigate(['/menu']);
  }
  onSubmit(){

    this.submitted=true;
    if(this.depositForm.invalid){
      return;
    }else{
      this.transaction.transactionId=0;
      this.transaction.accountId=parseInt(this.dataService.accountId);
      this.transaction.transferaccountid=parseInt(this.dataService.accountId);
      this.transaction.type="Credit";
      this.transaction.transactiondate=null;
      //this.transaction.amount=this.depositForm.get('depositAmount').value;

      this.depositAmount=this.depositForm.get('depositAmount').value;
      

      this.update=parseInt(this.depositAmount)+parseInt(this.dataService.balance);
      this.updatedBalance=(this.update).toString();
      this.transaction.updatedamount=this.updatedBalance;
      this.transaction.amount=this.depositForm.get('depositAmount').value;

      this.dataService.balance=this.updatedBalance;
      this.depositService.getAccountBalance(this.transaction).subscribe(

          data=>{

              this.updatedBalance=data;
              alert("Amount is deposited successfully "+ "and your current balance is: "+this.updatedBalance);
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
