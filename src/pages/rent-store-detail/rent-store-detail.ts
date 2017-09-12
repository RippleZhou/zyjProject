import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RentStoreOrderPage} from "../rent-store-order/rent-store-order";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the RentStoreDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rent-store-detail',
  templateUrl: 'rent-store-detail.html',
})
export class RentStoreDetailPage {

  goods = [
    {
      id:1,
      name: '单人沙发',
      price: '100',
      info: {
        one:"1.商品租赁结束时间不得超过房屋租赁结束时间；",
        two:"2. 不得将租赁商品带离所住公寓；",
        three:"3.  租赁使用过程中应保证商品的完好性，归还时如有缺失或损坏的，照价赔偿，甲方有权从押金中扣除，室内设施损坏金额超过押金时，甲方有权向乙方追诉赔偿超出部分；",
        four:"4. 如因个人原因提前退还商品的，商品租金不予退还；",
        five:"5.如有问题，可至门店管理处咨询。"
      },
    },
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams,private ROUTER: ROUTER) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RentStoreDetailPage');
  }

  gotoRentStoreOrder() {
    this.ROUTER.go(ROUTER.RENTSTOREORDER);
  }

}
