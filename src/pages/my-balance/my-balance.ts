import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RechargePage} from "../recharge/recharge";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the MyBalancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-balance',
  templateUrl: 'my-balance.html',
})
export class MyBalancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private ROUTER: ROUTER) {
  }

  gotoRecharge() {
    this.ROUTER.go(ROUTER.RECHARGE);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBalancePage');
  }


}
