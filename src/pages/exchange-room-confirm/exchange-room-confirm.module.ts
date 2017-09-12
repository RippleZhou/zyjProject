import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeRoomConfirmPage } from './exchange-room-confirm';

@NgModule({
  declarations: [
    ExchangeRoomConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeRoomConfirmPage),
  ],
  exports: [
    ExchangeRoomConfirmPage
  ]
})
export class ExchangeRoomConfirmPageModule {}
