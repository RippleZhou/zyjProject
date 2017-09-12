import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {SMS} from "../../api/sms.service";
import {USERAPI} from "../../api/user.api.service";
import {ValidationService} from "../../service/validation.service";

/**
 * Generated class for the ModificationPhonePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modification-phone',
  templateUrl: 'modification-phone.html',
})
export class ModificationPhonePage {

  sendingVerifyCode: boolean = false;

  num: number = 60;
  timer: any;
  getVerTitle: string = "获取验证码";

  data = {
    pastphone: null,
    verifyCode: '',
    newphone:''
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private SMS: SMS,
              private userApi: USERAPI,
              private alertCtrl: AlertController,
              public validationService: ValidationService

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificationPhonePage');
  }

  sendVerifyCode() {
    if (!this.sendingVerifyCode && this.data.pastphone) {
      this.sendingVerifyCode = true;
      this.timer = setInterval(() => {
        this.num--;
        this.getVerTitle = this.num + '秒';
        if (this.num === 0) {
          this.sendingVerifyCode = false;
          clearInterval(this.timer);
          this.num = 60;
          this.getVerTitle = '获取验证码';
        }
      }, 1000);
      this.SMS.send(this.data.pastphone, resp => {
        this.sendingVerifyCode = false;
      })
    }
  }


}
