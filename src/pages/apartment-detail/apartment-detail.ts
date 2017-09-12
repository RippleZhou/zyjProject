import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ReservationPage} from "../reservation/reservation";
import {ROUTER} from "../../service/router.service";
import {APARTMENTAPISERVICE, ApartmentDetail} from "../../api/apartment-api.service";
import {LocalStorage} from "../../utils/localstorage.utils";
import {ReservationModel} from "../../model/reservation.model";

/**
 * Generated class for the ApartmentDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-apartment-detail',
  templateUrl: 'apartment-detail.html',
})
export class ApartmentDetailPage {

  private id: any;
  private getLayoutList: any;
  private apartmentDetail:ApartmentDetail

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private ROUTER: ROUTER,
              private ls:LocalStorage,
              private apartmentApiService: APARTMENTAPISERVICE
  ) {
    this.id = navParams.get('id');
    console.log(this.id)
  }

  gotoReservation(layout) {
    this.ls.setObject('reservation',new ReservationModel(this.id,layout.id))
    this.ROUTER.go(ROUTER.RESERVATION);
  }
  gotoRentting() {
    this.ROUTER.go(ROUTER.RENTING);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApartmentDetailPage');
    this.apartmentApiService.getApartmentDetail(this.id,v =>{
        this.apartmentDetail = v;
        console.log(this.apartmentDetail);

      }
    );
    this.apartmentApiService.getLayoutList(this.id,v =>{
        this.getLayoutList = v;
        console.log(this.getLayoutList);

      }
    );
  }

}
