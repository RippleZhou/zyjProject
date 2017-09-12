import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ContractService} from "../../service/contract.service";

@IonicPage()
@Component({
  selector: 'page-live-people',
  templateUrl: 'live-people.html',
})
export class LivePeoplePage {

  data: { name: string, idNum: string } = {name: '', idNum: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private contractService: ContractService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivePeoplePage');
  }

  submit() {
    console.log('Submit', this.data);
    this.contractService.sendLivePeople(this.data);
    this.navCtrl.pop();
  }
}
