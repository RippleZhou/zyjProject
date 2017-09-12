import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleanDetailPage } from './clean-detail';

@NgModule({
  declarations: [
    CleanDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CleanDetailPage),
  ],
  exports: [
    CleanDetailPage
  ]
})
export class CleanDetailPageModule {}
