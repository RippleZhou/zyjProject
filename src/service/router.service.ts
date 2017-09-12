/**
 * Created by johnson on 17/4/27.
 */
import {Injectable} from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class ROUTER {
  static HOME = 'tab/wechat/home';
  static ACTIVITY = 'tab/wechat/activity';
  static USER = 'tab/wechat/user';
  static RENTING = 'tab/wechat/renting';
  static RESERVATION = 'tab/wechat/reservation';
  static APARTMENT = 'tab/wechat/apartment';
  static ACTIVITYDETAIL = 'tab/wechat/activitydetail';
  static ALIPAY = 'tab/wechat/alipay';
  static CLEANORDER = 'tab/wechat/cleanorder';
  static CHECK = 'tab/wechat/check';
  static SIGN = 'tab/wechat/sign';
  static INTERGRALORDER = 'tab/wechat/integralorder';
  static INTEGRALMALL = 'tab/wechat/integralmall';
  static EXCHANGE = 'tab/wechat/exchange';
  static CLEANDETAIL = 'tab/wechat/cleandetail';
  static PAY = 'tab/wechat/pay';
  static RECHARGE = 'tab/wechat/recharge';
  static MACLEANDATAIL = 'tab/wechat/mycleaningdatail';
  static MODIFICATIONPHONE = 'tab/wechat/modificationphone';
  static PAYRENT = 'tab/wechat/payrent';
  static RENTDETAIL = 'tab/wechat/rentingdetail';
  static PAYSUCCEEDDETAIL = 'tab/wechat/paysucceeddetail';
  static RENTSTOREDETAIL = 'tab/wechat/rentstoredetail';
  static RENTSTOREORDER = 'tab/wechat/rentstoreorder';
  static CONTRACTPAY = 'tab/wechat/contractpay';
  static INTERGRALSTROE = 'tab/wechat/integralstore';
  static MYBALANCE = 'tab/wechat/mybalance';
  static MYINFOMATION = 'tab/wechat/myinformation';
  static LIFECLEANNING = 'tab/wechat/lifecleanning';
  static RENTSTORE = 'tab/wechat/rentstore';
  static MYORDER = 'tab/wechat/myorder';
  static MYRENTHOUSE = 'tab/wechat/myrenthouse';
  static FASTMAINTAIN = 'tab/wechat/fastmaintain';
  static MYCLEANING = 'tab/wechat/mycleaning';
  static MYRENT = 'tab/wechat/myrent';
  static LIFEPAYMENT = 'tab/wechat/lifepayment';
  static SYSTEMMESSAGE = 'tab/wechat/systemmessage';

  public go(page:string, id?:string) {
    if (id == null) {
      window.location.hash = `#/${page}`
    } else {
      window.location.hash = `#/${page}/${id}`
    }
  }

  public goRenting() {
    this.go(ROUTER.RENTING)
  }

  public goReservation() {
    this.go(ROUTER.RESERVATION)
  }

  public goLifeCleaning() {
    this.go(ROUTER.LIFECLEANNING)
  }

  public goRentStore() {
    this.go(ROUTER.RENTSTORE)
  }

  public goPay() {
    this.go(ROUTER.PAY)
  }

  public goMyInfomation() {
    this.go(ROUTER.MYINFOMATION)
  }

  public goMyOrder() {
    this.go(ROUTER.MYORDER)
  }

  public goMyRentHouse() {
    this.go(ROUTER.MYRENTHOUSE)
  }

  public goFastmaintain() {
    this.go(ROUTER.FASTMAINTAIN)
  }

  public goMyCleaning() {
    this.go(ROUTER.MYCLEANING)
  }

  public goMyRent() {
    this.go(ROUTER.MYRENT)
  }

  public goLifePayMent() {
    this.go(ROUTER.LIFEPAYMENT)
  }

  public goAlipay() {
    this.go(ROUTER.ALIPAY)
  }

  public goSystemMessage() {
    this.go(ROUTER.SYSTEMMESSAGE)
  }
}




