import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {PaySucceedDetailPage} from "../pay-succeed-detail/pay-succeed-detail";
import {LocalStorage} from "../../utils/localstorage.utils";
import {CheckStandModel} from "../../model/checkstand.model";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the PaySucceedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pay-succeed',
  templateUrl: 'pay-succeed.html',
})
export class PaySucceedPage {

  checkstand:CheckStandModel;
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private ls:LocalStorage,
              private ROUTER: ROUTER
  ) {
    console.log('PaySucceedPage');
    this.checkstand = this.ls.getObject('checkstand') as CheckStandModel;
    console.log(this.checkstand);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaySucceedPage');
  }


  gotohome() {
    this.ROUTER.go(ROUTER.HOME);
  }

  gotoPaySucceedDetail() {
    this.ROUTER.go(ROUTER.PAYSUCCEEDDETAIL);
  }

}
