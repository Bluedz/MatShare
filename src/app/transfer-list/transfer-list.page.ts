import { Component, OnInit } from '@angular/core';
// import { NavController, NavParams } from '@ionic/angular'

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.page.html',
  styleUrls: ['./transfer-list.page.scss'],
})
export class TransferListPage implements OnInit {
  // private s
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
    'paper'
  ];
  public items: Array<{ title: string; note: string; icon: string}> = [];
  constructor() {
    for (let i = 1; i < 50; i++) {
      this.items.push({
        title: 'GY20191102001 ',
        note: 'YB21931 #' + i,
        icon: this.icons[
          Math.floor(Math.random() * this.icons.length)
        ]
      });
    }
  }

  ngOnInit() {
  }

}
