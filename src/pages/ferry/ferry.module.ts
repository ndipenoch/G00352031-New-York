import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FerryPage } from './ferry';

@NgModule({
  declarations: [
    FerryPage,
  ],
  imports: [
    IonicPageModule.forChild(FerryPage),
  ],
})
export class FerryPageModule {}
