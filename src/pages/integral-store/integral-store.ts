import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IntegralMallPage} from "../integral-mall-page/integral-mall-page";
import {ExchangeRecordPage} from "../exchange-record/exchange-record";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the IntegralStorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-integral-store',
  templateUrl: 'integral-store.html',
})
export class IntegralStorePage {

  commoditys=[
    {
      id:1,
      image: './assets/images/cyd.jpg',
      name: '礼品',
      price: '100'
    },
    {
      id:2,
      image: './assets/images/cyd.jpg',
      name: '礼品',
      price: '100'
    },
    {
      id:3,
      image: './assets/images/cyd.jpg',
      name: '礼品',
      price: '100'
    }
    , {
      id:4,
      image: './assets/images/cyd.jpg',
      name: '礼品',
      price: '100'
    },
    {
      id:5,
      image: './assets/images/cyd.jpg',
      name: '礼品',
      price: '100'
    }
    , {
      id:6,
      image: './assets/images/cyd.jpg',
      name: '礼品',
      price: '100'
    },
    {
      id:7,
      image: './assets/images/cyd.jpg',
      name: '礼品',
      price: '100'
    }
    , {
      id:8,
      image: './assets/images/cyd.jpg',
      name: '礼品',
      price: '100'
    }

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,private ROUTER: ROUTER) {
  }

  gotoIntegralMall(v) {
    this.ROUTER.go(ROUTER.INTEGRALMALL,v.id);
  }

  gotoExchangeRecord() {
    this.ROUTER.go(ROUTER.EXCHANGE);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntegralStorePage');
  }

}
