import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Transaction } from './withdraw.component';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  constructor(private http:HttpClient) { }

  uri: string="http://localhost:9090/withdraw";
  url:string="http://localhost:9090/show";

  public getAccountBalance(transaction:Transaction): Observable<any>{

    return this.http.post(`${this.uri}/`,transaction).pipe(retry(1),catchError(this.handleError1));
  }

  public getCurrentBalance(accountId: string): Observable<any>{

    console.log(`${this.url}/${accountId}`);  
    console.log(accountId)  ;
    return this.http.get(`${this.url}/${accountId}`).pipe(retry(1),catchError(this.handleError2));
}

  handleError1(error){

    if(!(error.error instanceof ErrorEvent)){
      window.alert('Can not be withdrawn ');
      return throwError('Can not be withdrawn');
    }
  }
  handleError2(error){

    if(!(error.error instanceof ErrorEvent)){
      window.alert('Can not get current balance');
      return throwError('Can not get current balance');
    }
  }

  
}
