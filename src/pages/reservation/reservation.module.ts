import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ReservationPage} from './reservation';
import {ReservationConfirmModule} from "../reservation-confirm/reservation-confirm.module";

@NgModule({
  declarations: [
    ReservationPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationPage),
    ReservationConfirmModule,
  ],
  exports: [
    ReservationPage
  ]
})
export class ReservationModule {
}
