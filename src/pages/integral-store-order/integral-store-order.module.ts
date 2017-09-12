import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntegralStoreOrderPage } from './integral-store-order';

@NgModule({
  declarations: [
    IntegralStoreOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(IntegralStoreOrderPage),
  ],
  exports: [
    IntegralStoreOrderPage
  ]
})
export class IntegralStoreOrderPageModule {}
