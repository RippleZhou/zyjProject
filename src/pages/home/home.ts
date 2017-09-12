import {Component, OnDestroy, OnInit} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ReservationPage} from "../reservation/reservation";
import {ApartmentDetailPage} from "../apartment-detail/apartment-detail";
import {RentStorePage} from "../rent-store/rent-store";
import {LifeCleanningPage} from "../life-cleanning-page/life-cleanning-page";
import {RentingPage} from "../renting-page/renting-page";
import {ApartmentResponse, APARTMENTAPISERVICE} from "../../api/apartment-api.service";
import {LocalStorage} from "../../utils/localstorage.utils";
import {USER} from "../../service/user.service";
import {USERAPI} from "../../api/user.api.service";
import {UserModel} from "../../model/user.model";
import {ActivityPage} from "../activity/activity";
import {UserPage} from "../user/user";
import {ROUTER} from "../../service/router.service";
import {ReservationModel} from "../../model/reservation.model";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  ngOnInit(): void {
    let reg = location.href.match(/openId=([^&=]*)/);
    this.ls.set('openId', reg ? reg[1] : '')
    let tokenreg = location.href.match(/token=([^&=]*)/);
    if (tokenreg) {
      let token = tokenreg[1]
      this.USER.update(new UserModel({token: token}))
      this.USERAPI.fetchUser(v => {
        this.USER.update(new UserModel(v));
      })
    }
  }

  // app: any;
  midNavs = [
    {name: '我要租房', page: ()=>{
      this.ROUTER.goRenting()
    }},
    {name: '预约看房', page: ()=>{
      this.ls.setObject('reservation',new ReservationModel(null,null));
      this.ROUTER.goReservation()
    }},
    {name: '品质保洁', page: ()=>{
      this.ROUTER.goLifeCleaning()
    }},
    {name: '租赁商城', page: ()=>{
      this.ROUTER.goRentStore()
    }},
  ];



  apartments: ApartmentResponse[] = [];

  gotoReservation(v) {
    this.ls.setObject('reservation',new ReservationModel(v.id,null));
    this.ROUTER.go(ROUTER.RESERVATION,v.id);
  }

  gotoApartmentDetail(v) {
    this.ROUTER.go(ROUTER.APARTMENT,v.id);
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private app: App,
              private ls: LocalStorage,
              private USER: USER,
              private USERAPI: USERAPI,
              private ROUTER: ROUTER,
              private apartmentService: APARTMENTAPISERVICE) {

  }


  onMidNavClick(v) {
    v.page()
  }

  ionViewDidLoad() {
    this.app.setTitle('青果寓');
    console.log('home ionViewDidLoad');
    this.apartmentService.getPage({size: 5}, v => this.apartments = v.content);
    var tab = window.document.getElementById('main-tab');
    tab.style.display = 'block';
  }

}
