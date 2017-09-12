import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SystemMessageConfirmPage } from './system-message-confirm';

@NgModule({
  declarations: [
    SystemMessageConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(SystemMessageConfirmPage),
  ],
  exports: [
    SystemMessageConfirmPage
  ]
})
export class SystemMessageConfirmPageModule {}
