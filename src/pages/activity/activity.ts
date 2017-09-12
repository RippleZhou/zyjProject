import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ActivityDetailPage} from "../activity-detail/activity-detail";
import {UserPage} from "../user/user";
import {HomePage} from "../home/home";
import {ROUTER} from "../../service/router.service";


@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {

  titles=[
    {
      img:'./assets/images/cyd.jpg',
      title:'这里是头条新闻的地盘'
    }
  ]
  activities = [
    {
      id:'1',
      image: './assets/images/VCG41516401223.jpg',
      title:'活动标题',
      desc:'活动简介活动简介活动简介活动简介活动简介活动简介',
      date: new Date(),
      shop:'城银店'
    },{
      id:'2',
      image: './assets/images/gic18446002.jpg',
      title:'活动标题',
      desc:'活动简介活动简介活动简介活动简介活动简介活动简介',
      date: new Date(),
      shop:'城银店'
    },{
      id:'3',
      image: './assets/images/gic16983798.jpg',
      title:'活动标题',
      desc:'活动简介活动简介活动简介活动简介活动简介活动简介',
      date: new Date(),
      shop:'城银店'
    },
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private app: App,
              private ROUTER: ROUTER
  ) {
  }
  gotoActivityDetailPage(v) {
    this.ROUTER.go(ROUTER.ACTIVITYDETAIL,v.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Activity');
    this.app.setTitle('活动');
  }

  ionViewDidEnter() {

  }
}
