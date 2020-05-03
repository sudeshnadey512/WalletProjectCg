import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  uri: string="http://localhost:9090/transaction";
  constructor(private http:HttpClient) { }


  public getAllTransactionDetails(accountId:string):Observable<any>{

    return this.http.get(`${this.uri}/${accountId}`).pipe(retry(1),catchError(this.handleError));

  }
  handleError(error){

    if(!(error.error instanceof ErrorEvent)){
      window.alert('Transaction details can not be fetched');
      return throwError('Transaction details can not be fetched');
    }
  }
}
