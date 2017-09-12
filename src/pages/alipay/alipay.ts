import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AlipayApiService} from "../../api/alipay-api.service";
import {WechatUtil} from "../../utils/wechat.util";
import {ContractModel} from "../../model/contract.model";
import {LocalStorage} from "../../utils/localstorage.utils";
import {USER} from "../../service/user.service";
import {UserModel} from "../../model/user.model";
import {USERAPI} from "../../api/user.api.service";

/**
 * Generated class for the AlipayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alipay',
  templateUrl: 'alipay.html',
  providers: [AlipayApiService]
})
export class AlipayPage implements AfterViewInit{
  billNo:string;
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
    let tokenreg = location.href.match(/token=([^&=]*)/);
    if (tokenreg) {
      let token = tokenreg[1]
      this.USER.update(new UserModel({token: token}))
      this.USERAPI.fetchUser(v => {
        this.USER.update(new UserModel(v));
      })
    }
    let billNoReg = location.href.match(/billNo=([^&=]*)/);
    this.billNo = billNoReg[1]
    this.gotoPaySucceed();

  }

  data = {};

  contract: ContractModel;

  isWechat = this.isWeChat();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alipayApiService: AlipayApiService,
              private wechatUtil: WechatUtil,
              private ls:LocalStorage,
              private USER:USER,
              private USERAPI:USERAPI,
              private alertCtrl: AlertController) {
    this.contract = this.ls.getObject('contract') as ContractModel;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlipayPage');
    console.log(this.isWechat);
    console.log(this.contract);
  }

  isWeChat() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) + '' == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  }

  goPay = resp => {
    setTimeout(window.location.href = resp,2000)

  }

  gotoPaySucceed() {
    var inWechat = this.isWeChat()
    if (inWechat) {
      console.log("do noting");
    } else {
      this.alipayApiService.prepay(this.billNo, this.goPay)
    }
  }
}
