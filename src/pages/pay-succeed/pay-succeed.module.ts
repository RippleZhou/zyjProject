import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaySucceedPage } from './pay-succeed';

@NgModule({
  declarations: [
    PaySucceedPage,
  ],
  imports: [
    IonicPageModule.forChild(PaySucceedPage),
  ],
  exports: [
    PaySucceedPage
  ]
})
export class PaySucceedPageModule {}
