import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContractApiService, ContractMsg} from "../../api/contract-api.service";
import {LocalStorage} from "../../utils/localstorage.utils";
import {CheckStandModel} from "../../model/checkstand.model";
import {ContractModel} from "../../model/contract.model";

/**
 * Generated class for the PaySucceedDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pay-succeed-detail',
  templateUrl: 'pay-succeed-detail.html',
})
export class PaySucceedDetailPage {

  checkstand:CheckStandModel;
  contract: ContractModel;
  contractDetail:ContractMsg;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private ls:LocalStorage,
              private contractApiService:ContractApiService) {
    console.log('PaySucceedDetailPage');
    this.checkstand = this.ls.getObject('checkstand') as CheckStandModel;
    console.log(this.checkstand);
    this.contractApiService.getContractMsg(this.checkstand.id, (v) => {
      this.contractDetail = v
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaySucceedDetailPage');
  }

}
