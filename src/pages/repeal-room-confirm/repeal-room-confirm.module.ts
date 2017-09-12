import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepealRoomConfirmPage } from './repeal-room-confirm';

@NgModule({
  declarations: [
    RepealRoomConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(RepealRoomConfirmPage),
  ],
  exports: [
    RepealRoomConfirmPage
  ]
})
export class RepealRoomConfirmPageModule {}
