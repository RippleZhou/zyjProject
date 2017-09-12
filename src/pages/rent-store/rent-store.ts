import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RentStoreDetailPage} from "../rent-store-detail/rent-store-detail";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the RentStorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rent-store',
  templateUrl: 'rent-store.html',
})
export class RentStorePage {
  commoditys=[
  {
    id:1,
    image: './assets/images/cyd.jpg',
    name: '单人沙发',
    price: '100'
  },
  {
    id:2,
    image: './assets/images/cyd.jpg',
    name: '单人沙发',
    price: '100'
  },
  {
    id:3,
    image: './assets/images/cyd.jpg',
    name: '单人沙发',
    price: '100'
  }
  , {
    id:4,
    image: './assets/images/cyd.jpg',
    name: '单人沙发',
    price: '100'
  }
]



  constructor(public navCtrl: NavController, public navParams: NavParams,private ROUTER: ROUTER) {
  }

  gotoRentStoreDetail(v) {
    this.ROUTER.go(ROUTER.RENTSTOREDETAIL,v.id);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RentStorePage');
  }

}
