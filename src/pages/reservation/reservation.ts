import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ReservationConfirmPage} from "../reservation-confirm/reservation-confirm";
import {SMS} from "../../api/sms.service";
import {AppointmentApiService} from "../../api/appointment-api.service";
import {APARTMENTAPISERVICE, ApartmentLayoutModel} from "../../api/apartment-api.service";
import {ValidationService} from "../../service/validation.service";
import {USER} from "../../service/user.service";
import {UserModel} from "../../model/user.model";
import {LocalStorage} from "../../utils/localstorage.utils";
import {ReservationModel} from "../../model/reservation.model";


@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  num:number = 60;
  timer:any;
  disabled:boolean = false;
  getVerTitle:string = "获取验证码";

  data = {
    name: '',
    gender: 1,
    phone: '',
    verifyCode: '',
    startTime: new Date,
    apartmentId: null,
    layoutId: null,
  };

  genders = [
    {
      name: '男',
      icon: 'man',
      value: 1
    },
    {
      name: '女',
      icon: 'woman',
      value: 2
    }
  ];

  private sendingVerifyCode = false;
  private apartmentList:Array<{ id:number, name:string }>;
  private layoutList:Array<ApartmentLayoutModel>;

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
              private modalCtrl:ModalController,
              private SMS:SMS,
              private USER:USER,
              private ls:LocalStorage,
              private appointmentApiService:AppointmentApiService,
              private apartmentApiService:APARTMENTAPISERVICE,
              public alertCtrl:AlertController,
              public validationService:ValidationService) {
    let tmp = this.ls.getObject('reservation') as ReservationModel;
    let user = this.USER.get();
    this.data.name = user.name;
    this.data.gender = user.sex ? user.sex : 1;
    this.data.phone = user.username;
    this.data.apartmentId = tmp.apartmentId;
    this.data.layoutId = tmp.layoutId;
    this.loadLayoutList()
  }

  get apartmentId() {
    return this.data.apartmentId;
  }

  set apartmentId(v) {
    this.data.apartmentId = v;
    this.loadLayoutList()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');

    this.apartmentApiService.getList(v => this.apartmentList = v);
  }

  submit() {
    console.log(JSON.stringify(this.data));
    let msg = this.checkValid();
    if (msg != '') {
      this.USER.toast(msg);
      return
    }
    let reqData = {
      name: this.data.name,
      phone: this.data.phone,
      verifyCode: this.data.verifyCode,
      buzProduct: this.data.apartmentId,
      buzItem: this.data.layoutId,
      sex: this.data.gender,
      startTime:this.data.startTime
    }
    this.appointmentApiService.sendAppointment(reqData, v => {
      let profileModal = this.modalCtrl.create(ReservationConfirmPage, this.data, {showBackdrop: true});
      profileModal.present();
      this.USER.update(new UserModel(v))
    })
  }

  checkValid():string {
    let str = '';
    if (!this.data.name) {
      str = '请填写姓名';
    } else if (!this.validationService.isPhoneValid(this.data.phone)) {
      str = '请填写正确的手机号';
    } else if (!this.data.verifyCode) {
      str = '请填写验证码';
    } else if (!this.data.apartmentId) {
      str = '请选择公寓';
    }
    return str;
  }

  sendVerifyCode() {
    if (!this.sendingVerifyCode && this.data.phone) {
      this.sendingVerifyCode = true;
      this.disabled = true;
      this.timer = setInterval(() => {
        this.num--;
        this.getVerTitle = this.num + '秒';
        if (this.num === 0) {
          clearInterval(this.timer);
          this.disabled = false;
          this.num = 60;
          this.getVerTitle = '获取验证码';
        }
      }, 1000);
      this.SMS.send(this.data.phone, resp => {
        this.sendingVerifyCode = false;
      })
    }
  }

  loadLayoutList() {
    if (this.apartmentId !== null) {
      this.apartmentApiService.getLayoutList(this.apartmentId, v => this.layoutList = v);
    }
  }

}
