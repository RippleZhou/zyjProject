import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyInformationPage } from './my-information-page';

@NgModule({
  declarations: [
    MyInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(MyInformationPage),
  ],
  exports: [
    MyInformationPage
  ]
})
export class MyInformationPageModule {}
