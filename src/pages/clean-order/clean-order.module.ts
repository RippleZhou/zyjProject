import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleanOrderPage } from './clean-order';

@NgModule({
  declarations: [
    CleanOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(CleanOrderPage),
  ],
  exports: [
    CleanOrderPage
  ]
})
export class CleanOrderPageModule {}
