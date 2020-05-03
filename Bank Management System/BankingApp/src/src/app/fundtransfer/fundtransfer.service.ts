import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Transaction } from './fundtransfer.component';

@Injectable({
  providedIn: 'root'
})
export class FundtransferService {

  url:string="http://localhost:9090/show";
  uri: string="http://localhost:9090/withdraw";
  url1:string="http://localhost:9090/deposit";
  constructor(private http:HttpClient) { }

  public getAccountBalance(transaction:Transaction): Observable<any>{

    return this.http.post(`${this.url1}/`,transaction).pipe(retry(1),catchError(this.handleError1));
  }
public getCurrentBalance(accountId: string): Observable<any>{

    console.log(`${this.url}/${accountId}`);  
    console.log(accountId)  ;
    return this.http.get(`${this.url}/${accountId}`).pipe(retry(1),catchError(this.handleError2));
}
public transferBalance(transaction:Transaction): Observable<any>{

  return this.http.post(`${this.uri}/`,transaction).pipe(retry(1),catchError(this.handleError3));
}
handleError1(error){

  if(!(error.error instanceof ErrorEvent)){
    window.alert('Amount can not be transferred ');
    return throwError('Amount can not be transferred ');
  }
}

  handleError2(error){

    if(!(error.error instanceof ErrorEvent)){
      window.alert('Account number does not exist ');
      return throwError('Account number does not exist ');
    }
  }
  handleError3(error){

    if(!(error.error instanceof ErrorEvent)){
      window.alert('Can not be deposited ');
      return throwError('Can not be deposited ');
    }
  }

}
