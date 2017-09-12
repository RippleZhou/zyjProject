import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntegralMallPage } from './integral-mall-page';

@NgModule({
  declarations: [
    IntegralMallPage,
  ],
  imports: [
    IonicPageModule.forChild(IntegralMallPage),
  ],
  exports: [
    IntegralMallPage
  ]
})
export class IntegralMallPageModule {}
