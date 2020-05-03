import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  name:string;
  accountId:string;
  balance:string;
  receiverBalance:string;
  flag:boolean=false;

  isValid():boolean{
    return this.flag;
  }
  
}
