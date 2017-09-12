import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {CheckstandPage} from "../checkstand/checkstand";
import {ContractApiService, Rentbill, RentbillRequest} from "../../api/contract-api.service";
import {FormControl, FormGroup} from "@angular/forms";
import {LocalStorage} from "../../utils/localstorage.utils";
import {CheckStandModel} from "../../model/checkstand.model";
import {ROUTER} from "../../service/router.service";

/**
 * Generated class for the PayRentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pay-rent',
  templateUrl: 'pay-rent.html',
})
export class PayRentPage {
  // langForm;
  Rentbills:RentbillRequest
  private ContractId: any;
  data:{};
  model:any
  Rentbill:Rentbill;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private contractApiService: ContractApiService,
              private ls:LocalStorage,
              private ROUTER: ROUTER
  ) {
    this.ContractId = this.ls.getObject('contractId');
    this.model = {
      sex:"Males"
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayRentPage');
    this.contractApiService.getRentbill({
        contractId:this.ContractId,
        type:1
  },v => {
      this.Rentbills = v.content
      console.log(this.Rentbills);
    })
  }

  submit(){
    let checkstand = new CheckStandModel(this.Rentbill.uuid,this.Rentbill.content,this.Rentbill.money,this.Rentbill.id)
    this.ls.setObject('checkstand',checkstand);
    this.ROUTER.go(ROUTER.CHECK);

  }

  itemClick(v){
    console.log(v);
    this.Rentbill = v
   if(v.id == this.Rentbill.id){
     return false;
   }else{
     this.Rentbill.id =v.id
   }
  }


}
