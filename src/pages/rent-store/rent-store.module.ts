import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentStorePage } from './rent-store';

@NgModule({
  declarations: [
    RentStorePage,
  ],
  imports: [
    IonicPageModule.forChild(RentStorePage),
  ],
  exports: [
    RentStorePage
  ]
})
export class RentStoreModule {}
