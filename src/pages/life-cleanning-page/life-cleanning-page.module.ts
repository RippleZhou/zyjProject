import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifeCleanningPage } from './life-cleanning-page';

@NgModule({
  declarations: [
    LifeCleanningPage,
  ],
  imports: [
    IonicPageModule.forChild(LifeCleanningPage),
  ],
  exports: [
    LifeCleanningPage
  ]
})
export class LifeCleanningPageModule {}
