import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeSquarePage } from './time-square';

@NgModule({
  declarations: [
    TimeSquarePage,
  ],
  imports: [
    IonicPageModule.forChild(TimeSquarePage),
  ],
})
export class TimeSquarePageModule {}
