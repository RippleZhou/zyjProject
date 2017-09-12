import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CheckstandPage} from "../checkstand/checkstand";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the CleanOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-clean-order',
  templateUrl: 'clean-order.html',
})
export class CleanOrderPage {

  data={};

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
      name:'家电清洁',
      item:'100元/次'
    },
    {
      name:'合计',
      item:'100.00元'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,private ROUTER: ROUTER) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleanOrderPage');
  }

  gotoCheckstand() {
    this.ROUTER.go(ROUTER.CHECK);
  }

}
