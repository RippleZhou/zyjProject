import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CleanningDatailPage} from "../cleanning-datail/cleanning-datail";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the MyCleaningPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-cleaning',
  templateUrl: 'my-cleaning.html',
})
export class MyCleaningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private ROUTER: ROUTER) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCleaningPage');
  }

  gotocleanDetail() {
    this.ROUTER.go(ROUTER.MACLEANDATAIL);
  }

}
