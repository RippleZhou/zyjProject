import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CheckstandPage} from "../checkstand/checkstand";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the IntegralStoreOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-integral-store-order',
  templateUrl: 'integral-store-order.html',
})
export class IntegralStoreOrderPage {

  data={};

  monthItems = [
    {name: '1月', value: 1},
    {name: '2月', value: 3},
    {name: '6月', value: 6},
    {name: '1年', value: 12},
    {name: '2年', value: 24},
  ];

  layoutList=[
    {
      id:1,
      name:101
    },
    {
      id:2,
      name:102
    },
    {
      id:3,
      name:103
    }
  ];

  moneyItems=[
    {
      name:'礼品名称',
      item:'100分'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,private ROUTER: ROUTER) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntegralStoreOrderPage');
  }

  gotoCheckstand() {
    this.ROUTER.go(ROUTER.CHECK);
  }

}
