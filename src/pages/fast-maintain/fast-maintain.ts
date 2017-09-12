import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {FastMaintainConfirmPage} from "../fast-maintain-confirm/fast-maintain-confirm";

/**
 * Generated class for the FastMaintainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-fast-maintain',
  templateUrl: 'fast-maintain.html',
})
export class FastMaintainPage {

  data={};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FastMaintainPage');
  }

  submit(){
    let profileModal = this.modalCtrl.create(FastMaintainConfirmPage, this.data, {showBackdrop: true});
    profileModal.present();
  }

}
