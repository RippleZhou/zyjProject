import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntegralStorePage } from './integral-store';

@NgModule({
  declarations: [
    IntegralStorePage,
  ],
  imports: [
    IonicPageModule.forChild(IntegralStorePage),
  ],
  exports: [
    IntegralStorePage
  ]
})
export class IntegralStoreModule {}
