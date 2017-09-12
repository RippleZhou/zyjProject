import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationConfirmPage } from './reservation-confirm';

@NgModule({
  declarations: [
    ReservationConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationConfirmPage),
  ],
  exports: [
    ReservationConfirmPage
  ]
})
export class ReservationConfirmModule {}
