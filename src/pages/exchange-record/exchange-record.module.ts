import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeRecordPage } from './exchange-record';

@NgModule({
  declarations: [
    ExchangeRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeRecordPage),
  ],
  exports: [
    ExchangeRecordPage
  ]
})
export class ExchangeRecordPageModule {}
