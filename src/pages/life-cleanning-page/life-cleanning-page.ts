import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CleanDetailPage} from "../clean-detail/clean-detail";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the LifeCleanningPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-life-cleanning-page',
  templateUrl: 'life-cleanning-page.html',
})
export class LifeCleanningPage {
  commoditys=[
    {
      id:1,
      image: './assets/images/cyd.jpg',
      name: '1人2小时日常清洁',
      price: '100'
    },
    {
      id:2,
      image: './assets/images/cyd.jpg',
      name: '家电清洁',
      price: '100'
    },
    {
      id:3,
      image: './assets/images/cyd.jpg',
      name: '1人2小时日常清洁',
      price: '100'
    }
    , {
      id:4,
      image: './assets/images/cyd.jpg',
      name: '家电清洁',
      price: '100'
    },
    {
      id:5,
      image: './assets/images/cyd.jpg',
      name: '1人2小时日常清洁',
      price: '100'
    }
    , {
      id:6,
      image: './assets/images/cyd.jpg',
      name: '家电清洁',
      price: '100'
    }

  ]


  constructor(public navCtrl: NavController, public navParams: NavParams,private ROUTER: ROUTER) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifeCleanningPage');
  }

  CleanDetail() {
    this.ROUTER.go(ROUTER.CLEANDETAIL);
  }

}
