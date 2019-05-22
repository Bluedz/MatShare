
import { HttpService } from './../services/http.service';
import { TestGetDataService } from './../services/test-get-data.service';
import { Config } from './../../assets/config/config';

import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

//
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

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

  public itms = [];
  private totalPages: Number;
  private pageSize = 10;
  private currentPage = 1;
  public searchText = 'x';

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

  getMatlist() {
    const _this = this;

  // ----------
    this.httpService.loadfakeData(_this.currentPage, _this.searchText).subscribe((res: any) => {
      const datas = res.data;
      _this.totalPages = res.totalPages;
      for ( let i = 0; i < datas.length; i++) {
        _this.itms.push(datas[i]);
      }

      // if (_this.infiniteScroll != null) {
      //   _this.infiniteScroll.complete();
      //   _this.infiniteScroll = null;
      // }

      console.log(_this.itms);
      console.log('load = ' + 'to:' + this.totalPages + '; cu:' + this.currentPage + '; ' + this.infiniteScroll);
      // console.log(_this.itms[0].物料号);
    });

  // --------
    const url = Config.urlarr.u3 + Config.urlkeyArr.k3;
    const body = 'currentPage=' + _this.currentPage
                + '&pageSize=' + _this.pageSize
                + '&searchText=' + _this.searchText;
    // const body = Config.bodyArr.b3; // JSON.stringify(tmp);
    //  this.httpService.post(url, body).subscribe((response: any) => {
    //    console.log(response);
    //  });
    // this.testGetDataService.list(body).then((response: any) => {
    //   console.log(response);
    // });

  }

  // 搜索框操作
  onCancel ($event) {
     // this.searchText = 'can';
  }

  onClear ($event) {
     // this.reSet();
    //  this.searchText = 'cl';
    //  this.getMatlist ();
    console.log('clear');
  }

  ionInput ($event) {
     this.reSet();
     this.getMatlist();
     console.log('input=' + 'to:' + this.totalPages + '; cu:' + this.currentPage + '; ' + this.infiniteScroll);
  }


  // 当上划操作
  doInfinite(event) {
    setTimeout(() => {

      this.currentPage += 1;
      this.getMatlist();

      console.log('Load page Done');
      event.target.complete();

      // App logic to determine if all data is loaded and disable the infinite scroll
      if (this.currentPage === this.totalPages) {
        console.log('Load Data Done');
        event.target.disabled = true;
      }
    }, 500);
  }

  // 暂无用
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  private reSet () {
    // if (this.infiniteScroll != null) {
    //   this.infiniteScroll.complete();
    //   this.infiniteScroll = null;
    // }
    // this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    this.totalPages = 0;
    this.currentPage = 1;
    this.itms = [];
  }

  ngOnInit() {
    this.getMatlist();

  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
