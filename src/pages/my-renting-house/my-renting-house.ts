import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContractApiService, ContractListRequest} from "../../api/contract-api.service";
import {CheckStandModel} from "../../model/checkstand.model";
import {ROUTER} from "../../service/router.service";
import {LocalStorage} from "../../utils/localstorage.utils";

/**
 * Generated class for the MyRentingHousePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-renting-house',
  templateUrl: 'my-renting-house.html',
  providers:[ContractApiService]
})
export class MyRentingHousePage {

  ContractList:ContractListRequest

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public contractApiService:ContractApiService,
              private ls:LocalStorage,
              private ROUTER: ROUTER
  ) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MyRentingHousePage');
    this.contractApiService.getContractList(resp => {
      this.ContractList = resp.content;
    });

  }

  gotoPayRent(v) {
    this.ROUTER.go(ROUTER.PAYRENT, v.id);
  }


  gotoRentingDetail(v) {
    this.ROUTER.go(ROUTER.RENTDETAIL, v.id);
  }

  roomStyle(v:any,judge){
    if(judge == "warp") {
      return (v.status==2 || v.status==8 || v.status==4) ? 'sign' : 'no-sign';
    }
    else if(judge == "out-circle"){
      return (v.status==2 || v.status==8 || v.status==4) ? "red-circle" : "gray-circle"
    }
    else if(judge == "dateColor"){
      return (v.status==2 || v.status==8 || v.status==4) ? "red-date" : "gray-date"
    }
  }


  goCheckstand(v) {
    let checkstand = new CheckStandModel(v.uuid,v.orderName,v.rental,v.id)
    this.ls.setObject('checkstand',checkstand);
    this.ROUTER.go(ROUTER.CHECK);
  }
}
