import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppointmentApiService, AppointmentModel} from "../../api/appointment-api.service";

/**
 * Generated class for the MyOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-order',
  templateUrl: 'my-order.html',
})
export class MyOrderPage {

  appointmentList: AppointmentModel[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private appointmentApiService: AppointmentApiService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyOrderPage');
    this.appointmentApiService.getAppointmentPage(v => this.appointmentList = v.content);
  }

}
