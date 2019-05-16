import { HttpService } from './../services/http.service';
import { TestGetDataService } from './../services/test-get-data.service';


//
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    /*'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',*/
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public router: Router, private httpService: HttpService,
    private testGetDataService: TestGetDataService) {
    const base = ['临港'];


    for (let i = 1; i < 50; i++) {
      this.items.push({
        title: 'DB100001 ',
        note: base[0] + ' 气动接头|Connector #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  gotolistDetail(param1: any, param2: any) {
    // console.log(param2);
    this.router.navigate(['/list-mat-detail'], {
      queryParams: {
          title: param1,
          arr: JSON.stringify(param2)
      }
    });
  }

  ngOnInit() {

    const urlarr = {
      't1': 'https://jsonplaceholder.typicode.com/posts',
      't2': 'http://tool.chinaz.com/iframe.ashx?t=ping&callback=jQuery111306732883874549276_1549067322653',
      't3': 'http://csc.setechchina.com/dongchangCsc/rest/interface/purchaseServiceGm/list'
    };

    const urlkeyArr = {
      'k1': '',
      'k2': '?t=ping&callback=jQuery111306732883874549276_1549067322653',
      'k3': '?authKey=App_test02|20190515105756783|a4cc5ba22ebb92f8824a53364a42e93c'
    };

    const bodyArr = {
      'b1': 'currentPage=1&pageSize=10&searchText=',
      'b2': 'guid=8e7a403c-d998-4efa-b3d1-b67c0dfabc41&host=www.baidu.com&ishost=1&encode=phQm5C2YbzAbrYdjgTaefPFrT|aCdsrx&checktype=1',
      'b3': 'currentPage=1&pageSize=10&searchText='
    };

    const url = urlarr.t3 + urlkeyArr.k3;
    const body = bodyArr.b3; // JSON.stringify(tmp);
    // this.httpService.post(url, body).subscribe((response: any) => {
    //   console.log(response);

    // });

    this.testGetDataService.list(body).then((response: any) => {
      console.log(response);
    });
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
