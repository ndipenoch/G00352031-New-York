import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CentralParkPage } from './central-park';

@NgModule({
  declarations: [
    CentralParkPage,
  ],
  imports: [
    IonicPageModule.forChild(CentralParkPage),
  ],
})
export class CentralParkPageModule {}
