import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModificationPhonePage} from "../modification-phone/modification-phone";
import {ROUTER} from "../../service/router.service";
import {LocalStorage} from "../../utils/localstorage.utils";
import {UserModel} from "../../model/user.model";

/**
 * Generated class for the MyInformationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-information-page',
  templateUrl: 'my-information-page.html',
})
export class MyInformationPage {

  user:UserModel
  informations=[
    {
      pic:'http://placehold.it/62x62',
      name:'小样儿',
      gender:'女',
      tel:'18328338931',
      brithday:'1900-03-10',
      number:'220398877653982768',
      imgf:'http://placehold.it/172x110',
      imgr:'http://placehold.it/172x110',
    },

  ]

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private ROUTER: ROUTER,
              private ls:LocalStorage
  ) {
    this.user = this.ls.getObject('user') as UserModel;
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyInformationPage');
  }


  gotoModificationPhone() {
    this.ROUTER.go(ROUTER.MODIFICATIONPHONE);
  }

}
