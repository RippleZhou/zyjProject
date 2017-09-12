import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignContractPage } from './sign-contract';

@NgModule({
  declarations: [
    SignContractPage,
  ],
  imports: [
    IonicPageModule.forChild(SignContractPage),
  ],
  exports: [
    SignContractPage
  ]
})
export class SignContractPageModule {}
