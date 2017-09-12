import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRentingHousePage } from './my-renting-house';

@NgModule({
  declarations: [
    MyRentingHousePage,
  ],
  imports: [
    IonicPageModule.forChild(MyRentingHousePage),
  ],
  exports: [
    MyRentingHousePage
  ]
})
export class MyRentingHousePageModule {}
