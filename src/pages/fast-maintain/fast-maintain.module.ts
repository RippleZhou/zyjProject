import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FastMaintainPage } from './fast-maintain';

@NgModule({
  declarations: [
    FastMaintainPage,
  ],
  imports: [
    IonicPageModule.forChild(FastMaintainPage),
  ],
  exports: [
    FastMaintainPage
  ]
})
export class FastMaintainPageModule {}
