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
    'paper'
  ];
  public itms = [];
  constructor() {
    for (let i = 1; i < 50; i++) {
      this.itms.push({
        TransferNumber: 'GY20191102001 ',
        MatNo: 'YB21931 #' + i,
        icon: this.icons[0]
      });
    }
  }

  ngOnInit() {
  }

}
