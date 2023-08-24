import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient: HttpClient,) { }
  
  getQuery(_nombreQuery:string,_paramsQuery:string){
    const nombreQuery = _nombreQuery;
    const paramsQuery = _paramsQuery?`?${_paramsQuery}`:``;
    return this._httpClient.get(`${environment.apiUrl}/${nombreQuery}${paramsQuery}`);
  }

  postQuery(_nombreQuery:string,_paramsQuery:string,_dataQuery:any){
    const nombreQuery = _nombreQuery;
    const paramsQuery = _paramsQuery?`?${_paramsQuery}`:``;
    return this._httpClient.post(`${environment.apiUrl}/${nombreQuery}${paramsQuery}`,_dataQuery);
  }

  putQuery(){}
  deleteQuery(){}
}
