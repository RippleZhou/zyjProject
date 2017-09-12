import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplySucceedConfirmPage } from './apply-succeed-confirm';

@NgModule({
  declarations: [
    ApplySucceedConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplySucceedConfirmPage),
  ],
  exports: [
    ApplySucceedConfirmPage
  ]
})
export class ApplySucceedConfirmPageModule {}
