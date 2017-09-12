import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CheckstandPage} from "../checkstand/checkstand";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the RentStoreOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rent-store-order',
  templateUrl: 'rent-store-order.html',
})
export class RentStoreOrderPage {

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
      name:'单人沙发',
      item:'100元/月'
    },
    {
      name:'租期',
      item:'1个月'
    },
    {
      name:'合计',
      item:'100.00元'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,private ROUTER: ROUTER) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentStoreOrderPage');
  }
  gotoCheckstand() {
    this.ROUTER.go(ROUTER.CHECK);
  }


}
