import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-list-mat-detail',
  templateUrl: './list-mat-detail.page.html',
  styleUrls: ['./list-mat-detail.page.scss'],
})
export class ListMatDetailPage implements OnInit {
  public arr = {
    title: '',
    note: '',
    icon: ''};

  constructor(public activeRoute: ActivatedRoute) {

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.arr = JSON.parse(params['arr']);
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
