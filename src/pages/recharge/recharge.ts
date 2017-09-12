import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RechargePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recharge',
  templateUrl: 'recharge.html',
})
export class RechargePage {

  data={
    money:0
  };

  moneyItems = [
    {name: '50元', value: 50},
    {name: '100元', value: 100},
    {name: '300元', value: 300},
    {name: '500元', value: 500},
    {name: '1000元', value: 1000},
    {name: '3000元', value: 3000},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RechargePage');
  }

}
