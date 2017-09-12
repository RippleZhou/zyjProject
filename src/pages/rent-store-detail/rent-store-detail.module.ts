import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentStoreDetailPage } from './rent-store-detail';

@NgModule({
  declarations: [
    RentStoreDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RentStoreDetailPage),
  ],
  exports: [
    RentStoreDetailPage
  ]
})
export class RentStoreDetailModule {}
