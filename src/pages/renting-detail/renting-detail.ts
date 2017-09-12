import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PayRentPage} from "../pay-rent/pay-rent";
import {ExchangeRoomConfirmPage} from "../exchange-room-confirm/exchange-room-confirm";
import {RepealRoomConfirmPage} from "../repeal-room-confirm/repeal-room-confirm";
import {ContractApiService, ContractMsg} from "../../api/contract-api.service";
import {ROUTER} from "../../service/router.service";
import {LocalStorage} from "../../utils/localstorage.utils";


@IonicPage()
@Component({
  selector: 'page-renting-detail',
  templateUrl: 'renting-detail.html',
})
export class RentingDetailPage {

  data={

  };

  private id: any;
  contractmsg:ContractMsg;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private contractApiService: ContractApiService,
              private ls:LocalStorage,
              private ROUTER: ROUTER

  ) {
    this.id = navParams.get('id');
    console.log(this.id);
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RentingDetailPage');
    this.contractApiService.getContractMsg(this.id,v => {
      this.contractmsg = v
      console.log(this.contractmsg.uuid);
    })
    this.ls.setObject('contractId',this.id);
  }

  exchange(){
    let profileModal = this.modalCtrl.create(ExchangeRoomConfirmPage, {ContractId:this.id}, {showBackdrop: true});
    profileModal.present();
  }

  repeal(){
    let profileModal = this.modalCtrl.create(RepealRoomConfirmPage, this.data, {showBackdrop: true});
    profileModal.present();
  }

  gotoPayRent() {
    this.ROUTER.go(ROUTER.PAYRENT);
  }




}
