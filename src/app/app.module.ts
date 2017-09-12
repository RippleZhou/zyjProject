import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {ActivityModule} from '../pages/activity/activity.module';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {UserModule} from "../pages/user/user.module";
import {ActivityDetailModule} from "../pages/activity-detail/activity-detail.module";
import {ReservationModule} from "../pages/reservation/reservation.module";
import {ApartmentDetailModule} from "../pages/apartment-detail/apartment-detail.module";
import {ReservationPage} from "../pages/reservation/reservation";
import {ApartmentDetailPage} from "../pages/apartment-detail/apartment-detail";
import {ActivityDetailPage} from "../pages/activity-detail/activity-detail";
import {RentStoreModule} from "../pages/rent-store/rent-store.module";
import {RentStoreDetailModule} from "../pages/rent-store-detail/rent-store-detail.module";
import {IntegralStoreModule} from "../pages/integral-store/integral-store.module";
import {IntegralMallPageModule} from "../pages/integral-mall-page/integral-mall-page.module";
import {MyInformationPageModule} from "../pages/my-information-page/my-information-page.module";
import {LifePaymentPageModule} from "../pages/life-payment-page/life-payment-page.module";
import {LifeCleanningPageModule} from "../pages/life-cleanning-page/life-cleanning-page.module";
import {HttpUtils} from "../utils/http.utils";
import {WechatUtil} from "../utils/wechat.util";
import {HttpModule} from '@angular/http';
import {RentingPageModule} from "../pages/renting-page/renting-page.module";
import {ContractPayPageModule} from "../pages/contract-pay-page/contract-pay-page.module";
import {ActivityPage} from "../pages/activity/activity";
import {RentingPage} from "../pages/renting-page/renting-page";
import {ContractPayPage} from "../pages/contract-pay-page/contract-pay-page";
import {IntegralMallPage} from "../pages/integral-mall-page/integral-mall-page";
import {IntegralStorePage} from "../pages/integral-store/integral-store";
import {LifeCleanningPage} from "../pages/life-cleanning-page/life-cleanning-page";
import {LifePaymentPage} from "../pages/life-payment-page/life-payment-page";
import {MyInformationPage} from "../pages/my-information-page/my-information-page";
import {RentStorePage} from "../pages/rent-store/rent-store";
import {RentStoreDetailPage} from "../pages/rent-store-detail/rent-store-detail";
import {UserPage} from "../pages/user/user";
import {LivePeoplePageModule} from "../pages/live-people/live-people.module";
import {LivePeoplePage} from "../pages/live-people/live-people";
import {ServiceModule} from "../service/service.module";
import {SignContractPageModule} from "../pages/sign-contract/sign-contract.module";
import {SignContractPage} from "../pages/sign-contract/sign-contract";
import {CheckstandPageModule} from "../pages/checkstand/checkstand.module";
import {CheckstandPage} from "../pages/checkstand/checkstand";
import {FormsModule} from "@angular/forms";
import {PaySucceedPageModule} from "../pages/pay-succeed/pay-succeed.module";
import {PaySucceedPage} from "../pages/pay-succeed/pay-succeed";
import {MyOrderPageModule} from "../pages/my-order/my-order.module";
import {MyOrderPage} from "../pages/my-order/my-order";
import {RentStoreOrderPageModule} from "../pages/rent-store-order/rent-store-order.module";
import {RentStoreOrderPage} from "../pages/rent-store-order/rent-store-order";
import {SystemMessagePageModule} from "../pages/system-message/system-message.module";
import {SystemMessagePage} from "../pages/system-message/system-message";
import {ExchangeRecordPageModule} from "../pages/exchange-record/exchange-record.module";
import {ExchangeRecordPage} from "../pages/exchange-record/exchange-record";
import {LoginPageModule} from "../pages/login/login.module";
import {ModificationPhonePageModule} from "../pages/modification-phone/modification-phone.module";
import {ModificationPhonePage} from "../pages/modification-phone/modification-phone";
import {MyCleaningPageModule} from "../pages/my-cleaning/my-cleaning.module";
import {MyCleaningPage} from "../pages/my-cleaning/my-cleaning";
import {CleanningDatailPageModule} from "../pages/cleanning-datail/cleanning-datail.module";
import {CleanningDatailPage} from "../pages/cleanning-datail/cleanning-datail";
import {FastMaintainPageModule} from "../pages/fast-maintain/fast-maintain.module";
import {FastMaintainPage} from "../pages/fast-maintain/fast-maintain";
import {FastMaintainConfirmPageModule} from "../pages/fast-maintain-confirm/fast-maintain-confirm.module";
import {CleanDetailPageModule} from "../pages/clean-detail/clean-detail.module";
import {CleanDetailPage} from "../pages/clean-detail/clean-detail";
import {CleanOrderPageModule} from "../pages/clean-order/clean-order.module";
import {CleanOrderPage} from "../pages/clean-order/clean-order";
import {RentingDetailPageModule} from "../pages/renting-detail/renting-detail.module";
import {RentingDetailPage} from "../pages/renting-detail/renting-detail";
import {PayRentPageModule} from "../pages/pay-rent/pay-rent.module";
import {PayRentPage} from "../pages/pay-rent/pay-rent";
import {IdcardConfirmPageModule} from "../pages/idcard-confirm/idcard-confirm.module";
import {IntegralStoreOrderPageModule} from "../pages/integral-store-order/integral-store-order.module";
import {IntegralStoreOrderPage} from "../pages/integral-store-order/integral-store-order";
import {MyBalancePageModule} from "../pages/my-balance/my-balance.module";
import {MyBalancePage} from "../pages/my-balance/my-balance";
import {RechargePageModule} from "../pages/recharge/recharge.module";
import {RechargePage} from "../pages/recharge/recharge";
import {MyRentPageModule} from "../pages/my-rent/my-rent.module";
import {MyRentPage} from "../pages/my-rent/my-rent";
import {SystemMessageConfirmPageModule} from "../pages/system-message-confirm/system-message-confirm.module";
import {USER} from "../service/user.service";
import {MyRentingHousePageModule} from "../pages/my-renting-house/my-renting-house.module";
import {MyRentingHousePage} from "../pages/my-renting-house/my-renting-house";
import {ExchangeRoomConfirmPageModule} from "../pages/exchange-room-confirm/exchange-room-confirm.module";
import {ApplySucceedConfirmPageModule} from "../pages/apply-succeed-confirm/apply-succeed-confirm.module";
import {RepealRoomConfirmPageModule} from "../pages/repeal-room-confirm/repeal-room-confirm.module";
import {AlipayPageModule} from "../pages/alipay/alipay.module";
import {AlipayPage} from "../pages/alipay/alipay";
import {PaySucceedDetailPageModule} from "../pages/pay-succeed-detail/pay-succeed-detail.module";
import {PaySucceedDetailPage} from "../pages/pay-succeed-detail/pay-succeed-detail";
import {ApiService} from "../api/api.service";
import {AppointmentApiService} from "../api/appointment-api.service";
import {USERAPI} from "../api/user.api.service";
import {SMS} from "../api/sms.service";
import {WfToast} from "../utils/toast.utils";
import {LocalStorage} from "../utils/localstorage.utils";
import {ContractApiService} from "../api/contract-api.service";
import {ImageApiService} from "../api/image-api.service";
import {PaymentApiService} from "../api/payment-api.service";
import {LoginPage} from "../pages/login/login";
import {APARTMENTAPISERVICE} from "../api/apartment-api.service";
import {ROUTER} from "../service/router.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages: 'true'}, {
      links: [
        {component: HomePage, name: 'home', segment: 'tab/wechat/home'},
        {component: ActivityPage, name: 'activity', segment: 'tab/wechat/activity'},
        {component: UserPage, name: 'user', segment: 'tab/wechat/user'},
        {component: ReservationPage, name: 'reservation', segment: 'tab/wechat/reservation'},
        {component: ReservationPage, name: 'reservation/:id', segment: 'tab/wechat/reservation/:id'},
        {component: ApartmentDetailPage, name: 'apartment/:id', segment: 'tab/wechat/apartment/:id'},
        {component: ActivityDetailPage, name: 'activitydetail/:id', segment: 'tab/wechat/activitydetail/:id'},
        {component: RentingPage, name: 'renting', segment: 'tab/wechat/renting'},
        {component: ContractPayPage, name: 'contractpay', segment: 'tab/wechat/contractpay'},
        {component: IntegralMallPage, name: 'integralmall', segment: 'tab/wechat/integralmall'},
        {component: IntegralStorePage, name: 'integralstore', segment: 'tab/wechat/integralstore'},
        {component: LifeCleanningPage, name: 'lifecleanning', segment: 'tab/wechat/lifecleanning'},
        {component: LifePaymentPage, name: 'lifepayment', segment: 'tab/wechat/lifepayment'},
        {component: MyInformationPage, name: 'myinformation', segment: 'tab/wechat/myinformation'},
        {component: RentStorePage, name: 'rentstore', segment: 'tab/wechat/rentstore'},
        {component: RentStoreDetailPage, name: 'rentstoredetail', segment: 'tab/wechat/rentstoredetail'},
        {component: LivePeoplePage, name: 'live', segment: 'tab/wechat/live'},
        {component: SignContractPage, name: 'sign', segment: 'tab/wechat/sign'},
        {component: CheckstandPage, name: 'check', segment: 'tab/wechat/check'},
        {component: PaySucceedPage, name: 'pay', segment: 'tab/wechat/pay'},
        {component: MyOrderPage, name: 'myorder', segment: 'tab/wechat/myorder'},
        {component: RentStoreOrderPage, name: 'rentstoreorder', segment: 'tab/wechat/rentstoreorder'},
        {component: SystemMessagePage, name: 'systemmessage', segment: 'tab/wechat/systemmessage'},
        {component: ExchangeRecordPage, name: 'exchange', segment: 'tab/wechat/exchange'},
        {component: ModificationPhonePage, name: 'modificationphone', segment: 'tab/wechat/modificationphone'},
        {component: MyCleaningPage, name: 'mycleaning', segment: 'tab/wechat/mycleaning'},
        {component: CleanningDatailPage, name: 'mycleaningdatail', segment: 'tab/wechat/mycleaningdatail'},
        {component: FastMaintainPage, name: 'fastmaintain', segment: 'tab/wechat/fastmaintain'},
        {component: CleanDetailPage, name: 'cleandetail', segment: 'tab/wechat/cleandetail'},
        {component: CleanOrderPage, name: 'cleanorder', segment: 'tab/wechat/cleanorder'},
        {component: RentingDetailPage, name: 'rentingdetail', segment: 'tab/wechat/rentingdetail/:id'},
        {component: PayRentPage, name: 'payrent', segment: 'tab/wechat/payrent'},
        {component: IntegralStoreOrderPage, name: 'integralorder', segment: 'tab/wechat/integralorder'},
        {component: MyBalancePage, name: ' mybalance', segment: 'tab/wechat/mybalance'},
        {component: RechargePage, name: ' recharge', segment: 'tab/wechat/recharge'},
        {component: MyRentPage, name: ' myrent', segment: 'tab/wechat/myrent'},
        {component: MyRentingHousePage, name: ' myrenthouse', segment: 'tab/wechat/myrenthouse'},
        {component: AlipayPage, name: ' alipay', segment: 'tab/wechat/alipay'},
        {component: PaySucceedDetailPage, name: ' paysucceeddetail', segment: 'tab/wechat/paysucceeddetail'}
      ]
    }),
    ActivityModule,
    HttpModule,
    FormsModule,
    ServiceModule,
    UserModule,
    ActivityDetailModule,
    ReservationModule,
    ApartmentDetailModule,
    RentStoreModule,
    RentStoreDetailModule,
    IntegralStoreModule,
    IntegralMallPageModule,
    MyInformationPageModule,
    LifePaymentPageModule,
    LifeCleanningPageModule,
    RentingPageModule,
    ContractPayPageModule,
    LivePeoplePageModule,
    SignContractPageModule,
    CheckstandPageModule,
    PaySucceedPageModule,
    MyOrderPageModule,
    RentStoreOrderPageModule,
    SystemMessagePageModule,
    ExchangeRecordPageModule,
    LoginPageModule,
    ModificationPhonePageModule,
    MyCleaningPageModule,
    CleanningDatailPageModule,
    FastMaintainPageModule,
    FastMaintainConfirmPageModule,
    CleanDetailPageModule,
    CleanOrderPageModule,
    RentingDetailPageModule,
    PayRentPageModule,
    IdcardConfirmPageModule,
    IntegralStoreOrderPageModule,
    MyBalancePageModule,
    RechargePageModule,
    MyRentPageModule,
    SystemMessageConfirmPageModule,
    MyRentingHousePageModule,
    ExchangeRoomConfirmPageModule,
    ApplySucceedConfirmPageModule,
    RepealRoomConfirmPageModule,
    AlipayPageModule,
    PaySucceedDetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpUtils,
    WechatUtil,
    USER,
    ROUTER,
    ApiService,
    APARTMENTAPISERVICE,
    AppointmentApiService,
    USERAPI,
    SMS,
    WfToast,
    LocalStorage,
    ContractApiService,
    ImageApiService,
    PaymentApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
