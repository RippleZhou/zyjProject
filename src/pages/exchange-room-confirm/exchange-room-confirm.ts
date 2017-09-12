import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {ApplySucceedConfirmPage} from "../apply-succeed-confirm/apply-succeed-confirm";
import {APARTMENTAPISERVICE, BuildingModel} from "../../api/apartment-api.service";
import {LocalStorage} from "../../utils/localstorage.utils";

/**
 * Generated class for the ExchangeRoomConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-exchange-room-confirm',
  templateUrl: 'exchange-room-confirm.html',
})
export class ExchangeRoomConfirmPage {
  data={
    HouseNo:null,
    apartmentId:0
  };
  apartmentList: string[];
  apartmentId: number;
  buildingData ?: BuildingModel;
  ContractId:number


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private modalCtrl: ModalController,
              protected alertCtrl:AlertController,
              private ls:LocalStorage,
              private apartmentApiService: APARTMENTAPISERVICE

  ) {
    this.ContractId = this.ls.getObject('contractId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExchangeRoomConfirmPage');

    if (!this.apartmentList) {
      this.apartmentApiService.getList((v => {
        this.apartmentList = v;
        console.log(this.apartmentList)
        if (this.apartmentList[0]) {
          this.onApartmentIdChange(v[0].id);
        }
      }));
    }

    console.log(this.data.apartmentId);
    console.log(this.data.HouseNo);
  }

  get buildingList() {
    return this.buildingData ? this.buildingData.buildingVOs : [];
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  apply(){
    if (!this.data.apartmentId&&!this.data.HouseNo) {
      this.alertCtrl
        .create({title: "提交申请失败", message: "请完善信息", buttons: ["确定"]})
        .present();
      return
    }

    this.apartmentApiService.exchangeRoom(this.ContractId,{
        apartmentId:this.data.apartmentId,
        HouseNo:this.data.HouseNo,
        operation:3},v=>{
        this.doCheckout()
    })


  }



  onApartmentIdChange(v) {
    this.apartmentId = v;
    this.apartmentApiService
      .getBuildingById(this.apartmentId,(v => {
        this.buildingData = v.layoutVOs;
        console.log(this.buildingData)
      }));
  }

  doCheckout(){
    let profileModal = this.modalCtrl.create(ApplySucceedConfirmPage, this.data, {showBackdrop: true});
    profileModal.present();
  }
}
