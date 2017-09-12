import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifePaymentPage } from './life-payment-page';

@NgModule({
  declarations: [
    LifePaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(LifePaymentPage),
  ],
  exports: [
    LifePaymentPage
  ]
})
export class LifePaymentPageModule {}
