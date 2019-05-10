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
  constructor(public router: Router) {
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
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
