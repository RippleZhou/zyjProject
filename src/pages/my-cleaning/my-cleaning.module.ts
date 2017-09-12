import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCleaningPage } from './my-cleaning';

@NgModule({
  declarations: [
    MyCleaningPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCleaningPage),
  ],
  exports: [
    MyCleaningPage
  ]
})
export class MyCleaningPageModule {}
