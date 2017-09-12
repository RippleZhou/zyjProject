import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdcardConfirmPage } from './idcard-confirm';

@NgModule({
  declarations: [
    IdcardConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(IdcardConfirmPage),
  ],
  exports: [
    IdcardConfirmPage
  ]
})
export class IdcardConfirmPageModule {}
