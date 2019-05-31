
import { HttpService } from './../services/http.service';
import { TestGetDataService } from './../services/test-get-data.service';
import { Config } from './../../assets/config/config';

import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

//
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  private icons = [
    'build'
  ];

  public itms = [];
  private totalPages: Number;
  private pageSize = 10;
  private currentPage = 1;
  public searchText = '';
  public searchBarText = '';
  private filters = {
    MatNo: '',
    Base: ''
  };


 // public infiniteScroll = null;

  constructor(public activeRoute: ActivatedRoute, public router: Router,
    private httpService: HttpService, private testGetDataService: TestGetDataService) {

    this.activeRoute.queryParams.subscribe((params: Params) => {
      // console.log (params['backFilters']);
      if (params['backFilters'] != null) {
        this.filters = JSON.parse(params['backFilters']);
        console.log (this.filters);
        this.searchBarText = '';
        //
        // console.log (this.filters.MatNo + '&' + this.filters.Base);
        if (this.filters.MatNo.length !== 0 || this.filters.Base.length !== 0) {
          this.searchText = 'MatNo=' + this.filters.MatNo + '&' + 'Base=' + this.filters.Base;
          this.searchBarText = this.filters.MatNo + ', ' + this.filters.Base;
          // this.currentPage = 1;
          // this.itms = [];
          this.reSet ();
          this.getMatlist();
        }
      } else {
        if ( this.itms.length === 0) {
          this.getMatlist();
        }
      }
    });
  }

  // go Detail
  gotolistDetail(param: any) {
    // console.log(param2);
    this.router.navigate(['/list-mat-detail'], {
      queryParams: {
          matDetailArr: JSON.stringify(param)
      }
    });
  }

  // to search
  goSearch() {
    this.router.navigate(['/list-search'], {
      queryParams: {
          searchFilters: JSON.stringify(this.filters)
      }
    });
  }

  // reset data
  private reSet () {
    this.infiniteScroll.disabled = false;
    this.totalPages = 0;
    this.currentPage = 1;
    this.itms = [];
  }

  // get & update list
  getMatlist() {
    const _this = this;

    // use Fake ----------
    this.httpService.loadfakeData('Mat', _this.currentPage, _this.searchText).subscribe((res: any) => {
      const datas = res.data;

      _this.totalPages = res.totalPages;
      for ( let i = 0; i < datas.length; i++) {
        _this.itms.push(datas[i]);
      }

      console.log(_this.itms);
      console.log('load = ' + 'to:' + this.totalPages + '; cu:' + this.currentPage + '; '
       + this.searchText + '; ' + this.infiniteScroll.disabled);

    });

    // use true --------
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


  // 当上划操作 ----
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

  ngOnInit() {

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  }

///////////////////////////////////////////////////////////////////
  // test function
  test () {
    this.currentPage = 3;
    this.itms = [];
    this.getMatlist ();
    this.infiniteScroll.disabled = false;
  }
}
