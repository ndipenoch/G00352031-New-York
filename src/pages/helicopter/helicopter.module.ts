import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelicopterPage } from './helicopter';

@NgModule({
  declarations: [
    HelicopterPage,
  ],
  imports: [
    IonicPageModule.forChild(HelicopterPage),
  ],
})
export class HelicopterPageModule {}
