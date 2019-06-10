import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-list-detail',
  templateUrl: './transfer-list-detail.page.html',
  styleUrls: ['./transfer-list-detail.page.scss'],
})
export class TransferListDetailPage implements OnInit {
  public arr = {
    TransferNumber: '', // 调拨单号
    MatNo: '',          //  物料号
    State: '',          // 状态
    contactInfo: '',    //
    D_side_Institution: '', // 需求方制单部门
    D_side_Maker: '' // 需求方制单人
  };
  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.arr = JSON.parse(params['listDetailArr']);
        console.log (this.arr);
      }
    );
   }

  ngOnInit() {
  }

}
