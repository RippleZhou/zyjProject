import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentStoreOrderPage } from './rent-store-order';

@NgModule({
  declarations: [
    RentStoreOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(RentStoreOrderPage),
  ],
  exports: [
    RentStoreOrderPage
  ]
})
export class RentStoreOrderPageModule {}
