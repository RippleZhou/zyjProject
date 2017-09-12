import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaySucceedDetailPage } from './pay-succeed-detail';

@NgModule({
  declarations: [
    PaySucceedDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PaySucceedDetailPage),
  ],
  exports: [
    PaySucceedDetailPage
  ]
})
export class PaySucceedDetailPageModule {}
