import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {IntegralStorePage} from "../integral-store/integral-store";
import {MyInformationPage} from "../my-information-page/my-information-page";
import {MyOrderPage} from "../my-order/my-order";
import {LifePaymentPage} from "../life-payment-page/life-payment-page";
import {SystemMessagePage} from "../system-message/system-message";
import {MyBalancePage} from "../my-balance/my-balance";
import {ContractPayPage} from "../contract-pay-page/contract-pay-page";
import {AuthService} from "../../service/auth.service";
import {LoginPage} from "../login/login";
import {MyCleaningPage} from "../my-cleaning/my-cleaning";
import {FastMaintainPage} from "../fast-maintain/fast-maintain";
import {UserInfo} from "../../api/user.api.service";
import {MyRentPage} from "../my-rent/my-rent";
import {MyRentingHousePage} from "../my-renting-house/my-renting-house";
import {AlipayPage} from "../alipay/alipay";
import {UserModel} from "../../model/user.model";
import {USER} from "../../service/user.service";
import {ActivityPage} from "../activity/activity";
import {HomePage} from "../home/home";
import {ROUTER} from "../../service/router.service";
import {EventService} from "../../service/event.service";

/**
 * Generated class for the User page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  midNavs = [
    {
      name: '我的资料', page: ()=> {
      this.ROUTER.goMyInfomation();
    }, requireAuth: true
    },
    {
      name: '我的预约', page: ()=> {
      this.ROUTER.goMyOrder()
    }, requireAuth: true
    },
    {
      name: '我的租房', page: ()=> {
      this.ROUTER.goMyRentHouse()
    }
    },
    {
      name: '我的维修', page: ()=> {
      this.ROUTER.goFastmaintain()
    }
    },
    {
      name: '我的保洁', page: ()=> {
      this.ROUTER.goMyCleaning()
    }
    },
    {
      name: '我的租赁', page: ()=> {
      this.ROUTER.goMyRent()
    }
    },
    {
      name: '生活缴费', page: ()=> {
      this.ROUTER.goLifePayMent()
    }
    },
    {
      name: '投诉建议', page: ()=> {
      this.ROUTER.goAlipay()
    }
    },
    {
      name: '系统消息', page: ()=> {
      this.ROUTER.goSystemMessage()
    }
    }
  ];

  private user?:UserModel;

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
              private USER:USER,
              private app:App,
              private eventService:EventService,
              private ROUTER:ROUTER) {
    this.eventService.subscribe(EventService.REFRESH_USER,()=>{
      console.log("refresh");
      this.user = this.USER.get();
      console.log(this.user);
    })
  }
;
  gotoIntergralStore() {
    this.ROUTER.go(ROUTER.INTERGRALSTROE);
  }

  gotoMyBalance() {
    this.ROUTER.go(ROUTER.MYBALANCE);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad User');
    this.user = this.USER.get();
  }

  onMidNavClick(v) {

    if (v.requireAuth) {
      this.USER.isLogin()
        .then(_ => {
          v.page();
        })
    } else {
      v.page();
    }

  }

  gotoMyInformationPage() {
    this.USER.isLogin()
      .then(v => {
        this.ROUTER.go(ROUTER.MYINFOMATION);
      })
  }

  // gotologin() {
  //   this.ROUTER.go(ROUTER.RESERVATION);
  // }

  ionViewDidEnter() {
    this.app.setTitle('我的');
  }
}
