import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentingPage } from './renting-page';

@NgModule({
  declarations: [
    RentingPage,
  ],
  imports: [
    IonicPageModule.forChild(RentingPage),
  ],
  exports: [
    RentingPage
  ]
})
export class RentingPageModule {}
