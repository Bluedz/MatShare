import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestGetDataService {
  private static server = '';
  public httpOptions = {
    headers: new HttpHeaders({
   // 'Content-Type': 'application/json; charset=UTF-8'
   'Content-Type': 'application/x-www-form-urlencodeed'
   })
  };

  constructor(private httpClient: HttpClient) { }

  list (filter: string): any {
    // const baseUrl = 'http://tool.chinaz.com/iframe.ashx';
    // 'http://tool.chinaz.com/iframe.ashx?t=ping&callback=jQuery111306732883874549276_1549067322653'
    // 'https://jsonplaceholder.typicode.com/posts';
     const baseUrl = 'http://csc.setechchina.com/dongchangCsc/rest/interface/purchaseServiceGm/list';
    // const baseUrl = 'http://http://192.168.60.37:8081/dongchangCsc/rest/interface/purchaseServiceGm/list';

    // const key = '?t=ping&callback=jQuery111306732883874549276_1549067322653';
    // const key = '';
    const key =  '?authKey=App_test02|20190515105756783|a4cc5ba22ebb92f8824a53364a42e93c';

    const url = baseUrl + key;


    // const promise = this.httpClient.post(url, filter, this.httpOptions).toPromise();
    const promise = this.httpClient.post(url, filter, {
      headers: new HttpHeaders({
        'Accept': '*/*', // 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded' // ;charset=UTF-8
      })
    }).toPromise();
    promise.catch(function (error) {
      console.log(error);
    });
    return promise;
  }


}
