import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractPayPage } from './contract-pay-page';

@NgModule({
  declarations: [
    ContractPayPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractPayPage),
  ],
  exports: [
    ContractPayPage
  ]
})
export class ContractPayPageModule {}
