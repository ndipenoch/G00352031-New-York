import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SummertimePage } from './summertime';

@NgModule({
  declarations: [
    SummertimePage,
  ],
  imports: [
    IonicPageModule.forChild(SummertimePage),
  ],
})
export class SummertimePageModule {}
