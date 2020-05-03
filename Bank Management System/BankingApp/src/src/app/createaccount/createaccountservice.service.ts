import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './createaccount.component';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateaccountserviceService {

  constructor(private http:HttpClient) { }

  uri: string="http://localhost:9090/create";

  public addAccount(account:Account) :Observable<any>{
    return this.http.post(`${this.uri}/`,account).pipe(retry(1),catchError(this.handleError));

  }
  handleError(error){

    if(!(error.error instanceof ErrorEvent)){
      window.alert('Mobile number already registred try with different mobile number');
      return throwError('Mobile number already registred try with different mobile number');
    }
  }

  
}
