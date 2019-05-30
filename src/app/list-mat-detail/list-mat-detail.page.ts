import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-list-mat-detail',
  templateUrl: './list-mat-detail.page.html',
  styleUrls: ['./list-mat-detail.page.scss'],
})
export class ListMatDetailPage implements OnInit {
  public arr = {
    MatNo: '',        // 物料号
    Base: '',         // 基地
    WarehLoc: '',     // 库位
    Unit: '',         // 单位
    Quantity: '',     // 数量
    BatchNum: '',     // 批号
    WrkshpCode: '',   // 车间码
    Manufacturer: '', // 制造商
    MatDetail: ''     // 物料描述
  };

  constructor(public activeRoute: ActivatedRoute) {

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.arr = JSON.parse(params['matDetailArr']);
       console.log (this.arr);
    });
    /*
    this.matTitle = this.arr.title;
    this.item2 = this.arr.note;
    this.item3 = this.arr.icon;
    */
  }

  ngOnInit() {
  }

}
