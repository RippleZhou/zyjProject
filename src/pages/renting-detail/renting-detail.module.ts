import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentingDetailPage } from './renting-detail';

@NgModule({
  declarations: [
    RentingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RentingDetailPage),
  ],
  exports: [
    RentingDetailPage
  ]
})
export class RentingDetailPageModule {}
