import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fast-maintain-confirm',
  templateUrl: 'fast-maintain-confirm.html',
})
export class FastMaintainConfirmPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FastMaintainConfirmPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

}
