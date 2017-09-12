import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ValidationService} from "../../service/validation.service";
import {WechatService} from "../../service/wechat.service";
import {USERAPI} from "../../api/user.api.service";
import {SMS} from "../../api/sms.service";
import {UserModel} from "../../model/user.model";
import {USER} from "../../service/user.service";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  sendingVerifyCode:boolean = false;

  num:number = 60;
  timer:any;
  getVerTitle:string = "获取验证码";
  data:any;

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
              public viewCtrl:ViewController,
              private SMS:SMS,
              private USER:USER,
              private userApi:USERAPI,
              public validationService:ValidationService,
              public wechatService:WechatService) {
  this.data = {
    communityId:'2f93a76eda6c4873811befac41c9c0c2',
    phone: null,
    verifyCode: null,
    openId: null
  };
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  sendVerifyCode() {
    if (!this.sendingVerifyCode && this.data.phone) {
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
      this.SMS.send(this.data.phone, resp => {
        this.sendingVerifyCode = false;
      })
    }
  }

  submit() {
    this.data.openId = this.wechatService.getOpenId();
    this.userApi.registration(this.data,resp=>{
      this.viewCtrl.dismiss();
      this.USER.update(new UserModel(resp))
    })
  }
}

