import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-activity-detail',
  templateUrl: 'activity-detail.html',
})
export class ActivityDetailPage {


  activity = {
    image: 'assets/images/cyd.jpg',
    title: '活动标题',
    time: new Date(),
    readCount: 123,
    content: '活动详情活动详情活动详情活<br>动详情活动详情活动详情活动详情活<br>动详情活动详情活动详情活动详情活动详情活动详情活动详情活动详情活动详情'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityDetailPage');
  }
}
