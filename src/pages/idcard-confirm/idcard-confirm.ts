import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {USER} from "../../service/user.service";

/**
 * Generated class for the IdcardConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-idcard-confirm',
  templateUrl: 'idcard-confirm.html',
})
export class IdcardConfirmPage {
  data = {
    name: this.USER.get().name,
    idcard: this.USER.get().idcard,
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private USER:USER,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdcardConfirmPage');
  }

  dismiss() {

    this.viewCtrl.dismiss(this.data);
  }


}
