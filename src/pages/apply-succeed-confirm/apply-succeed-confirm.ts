import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the ApplySucceedConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-apply-succeed-confirm',
  templateUrl: 'apply-succeed-confirm.html',
})
export class ApplySucceedConfirmPage {

  constructor(public navCtrl: NavController,
              private ROUTER: ROUTER,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplySucceedConfirmPage');
  }

  gotoHome() {
    this.ROUTER.go(ROUTER.HOME);
  }

}
