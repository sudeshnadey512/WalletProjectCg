import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private _http:HttpClient) { }

  uri: string="http://localhost:9090/show";

  public getAccountBalance(accountId: string): Observable<any>{

    console.log(`${this.uri}/${accountId}`);    
    return this._http.get(`${this.uri}/${accountId}`).pipe(retry(1),catchError(this.handleError));
}
handleError(error){

  if(!(error.error instanceof ErrorEvent)){
    window.alert('Something Went wrong');
    return throwError('Balance cant not be fetched.');
  }
}

}
