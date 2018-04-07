import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CyclingPage } from './cycling';

@NgModule({
  declarations: [
    CyclingPage,
  ],
  imports: [
    IonicPageModule.forChild(CyclingPage),
  ],
})
export class CyclingPageModule {}
