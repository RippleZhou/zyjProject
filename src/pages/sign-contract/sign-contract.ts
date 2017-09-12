import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {CheckstandPage} from "../checkstand/checkstand";
import {ContractService} from "../../service/contract.service";
// import * as SignaturePad from 'signature_pad';
import SignaturePad from 'signature_pad';
import {ContractApiService, ContractDetail} from "../../api/contract-api.service";
import {ImageApiService} from "../../api/image-api.service";
import construct = Reflect.construct;
import {EventService} from "../../service/event.service";
import {LocalStorage} from "../../utils/localstorage.utils";
import {CheckStandModel} from "../../model/checkstand.model";
import {ContractModel} from "../../model/contract.model";
import {ROUTER} from "../../service/router.service";

// const SignaturePad = window['SignaturePad'];

@IonicPage()
@Component({
  selector: 'page-sign-contract',
  templateUrl: 'sign-contract.html',
})
export class SignContractPage {
  contract:ContractModel;
  contractDetail:ContractDetail;

  @ViewChild('signPad') signPadCanvas:ElementRef;
  signPad:any;


  // get liveList(){
  //   let items=[this.moneyInfo.person];
  //   return items;
  // }

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
              private contractService:ContractService,
              private eventService:EventService,
              protected alertCtrl:AlertController,
              private contractApiService:ContractApiService,
              private ls:LocalStorage,
              private imageApiService:ImageApiService,
              private ROUTER: ROUTER
  ) {

    this.contract = this.ls.getObject('contract') as ContractModel;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignContractPage');

    this.signPad = new SignaturePad(this.signPadCanvas.nativeElement);
    this.contractApiService.getDetail(this.contract.contractId, v => {
      this.contractDetail = v
    })
  }


  gotoCheckstand() {
    if (this.signPad.isEmpty()) {
      this.alertCtrl
        .create({title: "提交合同失败", message: "请先签名", buttons: ["确定"]})
        .present();
      return
    }

    this.imageApiService.base64Upload({data: this.signPad.toDataURL("image/png")}, v=> {
        this.contractApiService.sendConfirm(this.contract.contractId, {signPicture: v.saveUrl}, this.doCheckout,this)
      }
    )
  }

  doCheckout(v,context) {
    let checkstand = new CheckStandModel(context.contract.billNo,context.contract.billContent,context.contract.money,context.contract.contractId)
    context.ls.setObject('checkstand',checkstand);
    context.ROUTER.go(ROUTER.CHECK);
  }

}
