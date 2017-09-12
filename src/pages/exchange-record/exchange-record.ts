import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExchangeRecordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-exchange-record',
  templateUrl: 'exchange-record.html',
})
export class ExchangeRecordPage {

  exchanges = [
    {
      id:'1',
      image: 'http://placehold.it/75x75',
      title:'礼品名称',
      score:100,
      status:'兑换成功',
      date: new Date()
    },{
      id:'2',
      image: 'http://placehold.it/75x75',
      title:'礼品名称',
      score:100,
      status:'兑换成功',
      date: new Date()
    },{
      id:'3',
      image: 'http://placehold.it/75x75',
      title:'礼品名称',
      score:100,
      status:'兑换成功',
      date: new Date()
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExchangeRecordPage');
  }

}
