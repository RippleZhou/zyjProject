import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FastMaintainConfirmPage } from './fast-maintain-confirm';

@NgModule({
  declarations: [
    FastMaintainConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(FastMaintainConfirmPage),
  ],
  exports: [
    FastMaintainConfirmPage
  ]
})
export class FastMaintainConfirmPageModule {}
