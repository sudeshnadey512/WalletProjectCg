import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {retry,catchError} from 'rxjs/operators';
import { DataService } from '../data.service';


@Injectable({
  providedIn: 'root'
})
export class LoginverificationService {

   constructor(private _http:HttpClient,public dataService:DataService) { }

  uri: string="http://localhost:9090/login";
  
  public getAccountId(mobile:string,password:string): Observable<any>{

      console.log(`${this.uri}/${mobile}/${password}`);    
      return this._http.get(`${this.uri}/${mobile}/${password}`).pipe(retry(1),catchError(this.handleError));
  }
  handleError(error){

    if(!(error.error instanceof ErrorEvent)){
      window.alert('Mobile number/password not matched');
      return throwError('Mobile number/password not matched');
    }
  }
  

  


}
