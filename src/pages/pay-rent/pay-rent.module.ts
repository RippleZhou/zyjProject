import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayRentPage } from './pay-rent';

@NgModule({
  declarations: [
    PayRentPage,
  ],
  imports: [
    IonicPageModule.forChild(PayRentPage),
  ],
  exports: [
    PayRentPage
  ]
})
export class PayRentPageModule {}
