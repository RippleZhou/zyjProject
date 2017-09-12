import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleanningDatailPage } from './cleanning-datail';

@NgModule({
  declarations: [
    CleanningDatailPage,
  ],
  imports: [
    IonicPageModule.forChild(CleanningDatailPage),
  ],
  exports: [
    CleanningDatailPage
  ]
})
export class CleanningDatailPageModule {}
