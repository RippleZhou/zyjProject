import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivePeoplePage } from './live-people';

@NgModule({
  declarations: [
    LivePeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(LivePeoplePage),
  ],
  exports: [
    LivePeoplePage
  ]
})
export class LivePeoplePageModule {}
