import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PaySucceedPage} from "../pay-succeed/pay-succeed";
import {WechatService} from "../../service/wechat.service";
import {PaymentApiService} from "../../api/payment-api.service";
import {AuthService} from "../../service/auth.service";
import {AlipayPage} from "../alipay/alipay";
import {CheckStandModel} from "../../model/checkstand.model";
import {LocalStorage} from "../../utils/localstorage.utils";
import {ROUTER} from "../../service/router.service";
import {USER} from "../../service/user.service";

@IonicPage()
@Component({
  selector: 'page-checkstand',
  templateUrl: 'checkstand.html',
})
export class CheckstandPage {
  data = {
    payType: 'wx',
    openId: localStorage.getItem('openId')
  };
  checkstand:CheckStandModel;

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
              private modalCtrl:ModalController,
              private wechatService:WechatService,
              private paymentApiService:PaymentApiService,
              private alertCtrl:AlertController,
              private ls:LocalStorage,
              private USER:USER,
              private ROUTER: ROUTER,
              private authService:AuthService) {
    this.checkstand = this.ls.getObject('checkstand') as CheckStandModel;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckstandPage');
  }

  wechatPay = (v,context) => {
    let prepay = v;
    context.wechatService.pay({
      prepayId: prepay.prepay_id,
      timestamp: prepay.timeStamp,
      nonceStr: prepay.nonceStr,
      paySign: prepay.sign,
      onSuccess: () => this.ROUTER.goPay(),
      onFailed: (...args) => {
        console.log("Failed pay", args);
        this.alertCtrl.create({title: '支付失败', buttons: ['确定']}).present();
      },
      onCancel: (...args) => {
        console.log("Cancel pay", args);
        this.alertCtrl.create({title: '支付取消', buttons: ['确定']}).present();
      },
    });
  }

  gotoPaySucceed() {
    switch (this.data.payType) {
      case 'wx':
        this.paymentApiService.wechatPrepay(this.checkstand.billNo, {openId: this.data.openId}, this.wechatPay,this);
        break;
      case 'zfb':
      default:
        this.doCheckout()
    }

  }


  doCheckout() {
    let token = this.USER.get().token;
    this.ROUTER.go(`tab/wechat/alipay?token=${token}&billNo=${this.checkstand.billNo}`);
  }


}
