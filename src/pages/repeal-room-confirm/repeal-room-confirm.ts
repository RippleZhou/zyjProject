import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {ApplySucceedConfirmPage} from "../apply-succeed-confirm/apply-succeed-confirm";
import {APARTMENTAPISERVICE} from "../../api/apartment-api.service";
import {LocalStorage} from "../../utils/localstorage.utils";

/**
 * Generated class for the RepealRoomConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-repeal-room-confirm',
  templateUrl: 'repeal-room-confirm.html',
})
export class RepealRoomConfirmPage {

  data={};
  ContractId:any

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private modalCtrl: ModalController,
              private apartmentApiService: APARTMENTAPISERVICE,
              private ls:LocalStorage
  ) {
    this.ContractId = this.ls.getObject('contractId');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepealRoomConfirmPage');
    console.log(this.ContractId);
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }


  apply(){

    this.apartmentApiService.repealRoom(this.ContractId,{operation:1},v=>{
      this.doCheckout();
    })


  }

  doCheckout(){
    let profileModal = this.modalCtrl.create(ApplySucceedConfirmPage, this.data, {showBackdrop: true});
    profileModal.present();
  }


}
