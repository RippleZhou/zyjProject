import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PaySucceedPage} from "../pay-succeed/pay-succeed";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the LifePaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-life-payment-page',
  templateUrl: 'life-payment-page.html',
})
export class LifePaymentPage {
  data={};
  apartmentList=[
    {
      id:1,
      name:'公寓一'
    },
    {
      id:2,
      name:'公寓二'
    },
    {
      id:3,
      name:'公寓三'
    }
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private ROUTER: ROUTER
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifePaymentPage');
  }

  gotoPaySucceed() {
    this.ROUTER.go(ROUTER.PAY);
  }

}
