import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwimmingPage } from './swimming';

@NgModule({
  declarations: [
    SwimmingPage,
  ],
  imports: [
    IonicPageModule.forChild(SwimmingPage),
  ],
})
export class SwimmingPageModule {}
