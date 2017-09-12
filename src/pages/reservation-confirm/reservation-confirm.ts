import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-reservation-confirm',
  templateUrl: 'reservation-confirm.html',
})
export class ReservationConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationConfirmPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
