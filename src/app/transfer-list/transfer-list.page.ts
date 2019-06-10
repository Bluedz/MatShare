
import { HttpService } from './../services/http.service';
import { TestGetDataService } from './../services/test-get-data.service';
import { Config } from './../../assets/config/config';

import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.page.html',
  styleUrls: ['./transfer-list.page.scss'],
})
export class TransferListPage implements OnInit {
  public searchText = '';
  public currentPage = 1;
  public totalPages = 0;
  private filters = '';
  private icons = [
    'paper'
  ];
  public itms = [];
  constructor(public activeRoute: ActivatedRoute, public router: Router,
    private httpService: HttpService, private testGetDataService: TestGetDataService) {

      // for (let i = 1; i < 50; i++) {
      // this.itms.push({
      //   TransferNumber: 'GY20191102001 ',
      //   MatNo: 'YB21931 #' + i,
      //   state: 'yes',
      //   icon: this.icons[0]
      // });
      // }

    this.getList();

  }

  // goSearch() {}
  ionChange(event){
    this.reSet ();
    this.getList ();
  }

  // 当上划操作 ----
  doInfinite(event) {
    setTimeout(() => {

      this.currentPage += 1;
      this.getList();

      console.log('Load page Done');
      event.target.complete();

      // App logic to determine if all data is loaded and disable the infinite scroll
      if (this.currentPage === this.totalPages) {
        console.log('Load Data Done');
        event.target.disabled = true;
      }
    }, 500);
  }

 // 滑动刷新
 doRefresh(event) {
  console.log('Begin async operation');
  this.reSet ();
  this.getList ();
  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}

  goTranListDetail(param: any) {
    this.router.navigate(['/transfer-list-detail'], {
      queryParams: {
          listDetailArr: JSON.stringify(param)
      }
    });
  }

  // reset data
  private reSet () {
    // this.infiniteScroll.disabled = false;
    this.totalPages = 0;
    this.currentPage = 1;
    this.itms = [];
  }

  getList() {
    const _this = this;

    // use Fake ----------
    this.httpService.loadfakeData('transfer', _this.currentPage, _this.searchText).subscribe((res: any) => {
      const datas = res.data;

      _this.totalPages = res.totalPages;
      for ( let i = 0; i < datas.length; i++) {
        _this.itms.push(datas[i]);
      }

      console.log(_this.itms);
      // console.log('load = ' + 'to:' + this.totalPages + '; cu:' + this.currentPage + '; '
      //  + this.searchText + '; ' + this.infiniteScroll.disabled);

    });
  }



  ngOnInit() {
  }

}
