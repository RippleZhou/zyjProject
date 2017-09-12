import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckstandPage } from './checkstand';

@NgModule({
  declarations: [
    CheckstandPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckstandPage),
  ],
  exports: [
    CheckstandPage
  ]
})
export class CheckstandPageModule {}
