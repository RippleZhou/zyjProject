import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {SystemMessageConfirmPage} from "../system-message-confirm/system-message-confirm";

/**
 * Generated class for the SystemMessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-system-message',
  templateUrl: 'system-message.html',
})
export class SystemMessagePage {

  data={};

  activities = [
    {
      id:'1',
      image: './assets/images/VCG41516401223.jpg',
      title:'通知名称',
      desc:'系统消息系统消息系统消息系统消息系统消息系统消息',
      date: new Date()
    },{
      id:'2',
      image: './assets/images/gic18446002.jpg',
      title:'通知名称',
      desc:'系统消息系统消息系统消息系统消息系统消息系统消息',
      date: new Date()
    },{
      id:'3',
      image: './assets/images/gic16983798.jpg',
      title:'通知名称',
      desc:'系统消息系统消息系统消息系统消息系统消息系统消息',
      date: new Date()
    },
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SystemMessagePage');
  }

  submit(){
    let profileModal = this.modalCtrl.create(SystemMessageConfirmPage, this.data, {showBackdrop: true});
    profileModal.present();
  }

}
