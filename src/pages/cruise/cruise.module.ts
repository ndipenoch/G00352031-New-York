import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CruisePage } from './cruise';

@NgModule({
  declarations: [
    CruisePage,
  ],
  imports: [
    IonicPageModule.forChild(CruisePage),
  ],
})
export class CruisePageModule {}
