import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalariesPage } from './galaries';

@NgModule({
  declarations: [
    GalariesPage,
  ],
  imports: [
    IonicPageModule.forChild(GalariesPage),
  ],
})
export class GalariesPageModule {}
