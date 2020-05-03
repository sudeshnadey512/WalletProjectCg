import { Component, OnInit } from '@angular/core';
import { LoginverificationService } from '../firstpage/loginverification.service';
import { DataService } from '../data.service';
import { FunctionsService } from './functions.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[FunctionsService]
})
export class MenuComponent implements OnInit {

  name:string;
  accountId:string;
  constructor( private functionServive:FunctionsService,private router:Router,private loginService: LoginverificationService,public dataService:DataService,functionService:FunctionsService) { }

  ngOnInit() {

    this.name=this.dataService.name;
    this.accountId=this.dataService.accountId;
    console.log(this.accountId);
    

   
   
  }

  showBalance(){

    this.functionServive.getAccountBalance(this.accountId).subscribe(

      data=>{

        this.dataService.balance=data;
        console.log(this.dataService.balance);
        this.router.navigate(['/show']);

      }

    );
  }

  deposit(){
    this.router.navigate(['/deposit']);
  }

  gotoTransaction(){

    this.router.navigate(['/transaction']);
  }

  withdraw(){
    this.router.navigate(['/withdraw']);
  }

  gotoFundTransfer(){

    this.router.navigate(['/fund']);
  }

}

  
