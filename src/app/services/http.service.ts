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
    return this.httpClient.get(url
      , {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      })
    }
    );
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

  loadTestData(api: any) {
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
      // 'https://jsonplaceholder.typicode.com/comments');
      // 'http://139.224.65.152:8087/api/Inventories?Page=2');


      this.httpClient.get(api).subscribe(response => {
      console.log(response);
      });
  }

  loadfakeData(param0: string, param: Number, param2: string) {
    if (param0 === 'Mat') {
      if (param === 1 && param2 === '') {
        return this.httpClient.get('assets/data/data-mat.01.json');
      } else if (param2 === '') {
        return this.httpClient.get('assets/data/data-mat.02.json');
      }

      if (param === 1 && param2 !== '') {
        return this.httpClient.get('assets/data/data-mat.11.json');
      } else if (param2 !== '') {
        return this.httpClient.get('assets/data/data-mat.12.json');
      }
    }

    if (param0 === 'transfer') {
      if (param === 1 && param2 === '') {
        return this.httpClient.get('assets/data/InvocationDoc.01.json');
      } else if (param2 === '') {
        return this.httpClient.get('assets/data/InvocationDoc.02.json');
      }

      if (param === 1 && param2 !== '') {
        return this.httpClient.get('assets/data/InvocationDoc.11.json');
      } else if (param2 !== '') {
        return this.httpClient.get('assets/data/InvocationDoc.12.json');
      }
    }
  }

}
