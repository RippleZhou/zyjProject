import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRentPage } from './my-rent';

@NgModule({
  declarations: [
    MyRentPage,
  ],
  imports: [
    IonicPageModule.forChild(MyRentPage),
  ],
  exports: [
    MyRentPage
  ]
})
export class MyRentPageModule {}
