import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WallStreetPage } from './wall-street';

@NgModule({
  declarations: [
    WallStreetPage,
  ],
  imports: [
    IonicPageModule.forChild(WallStreetPage),
  ],
})
export class WallStreetPageModule {}
