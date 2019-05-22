import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';



import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {
  }

  public httpOptions = {
    headers: new HttpHeaders({
   // 'Content-Type': 'application/json; charset=UTF-8'
   'Content-Type': 'application/x-www-form-urlencodeed'
   })
  };

  // get请求
  get(url: string): Observable<any> {
      return this.httpClient.get(url, {
          headers: new HttpHeaders({
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          })
      });
          // .map(res => res.json());
  }

  // post请求
  post(url: string, body: any): Observable<any> {
      return this.httpClient.post(url, body, {
          headers: new HttpHeaders({
              'Accept': '*/*', // 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded' // ;charset=UTF-8'
          })
      });
         // .map(res => res.json()) ;
  }

  loadfakeData( param: Number, param2: string) {
      if (param === 1) {
         return this.httpClient.get('assets/data/data-mat.json');
      } else {
        return this.httpClient.get('assets/data/data-mat.1.json');
      }
  }

}
