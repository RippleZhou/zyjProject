import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificationPhonePage } from './modification-phone';

@NgModule({
  declarations: [
    ModificationPhonePage,
  ],
  imports: [
    IonicPageModule.forChild(ModificationPhonePage),
  ],
  exports: [
    ModificationPhonePage
  ]
})
export class ModificationPhonePageModule {}
