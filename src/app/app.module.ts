import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacesPage } from '../pages/places/places';
import { LibertyPage } from '../pages/liberty/liberty';
import { TimeSquarePage } from '../pages/time-square/time-square';
import { FifthAvenuePage } from '../pages/fifth-avenue/fifth-avenue';
import { WallStreetPage } from '../pages/wall-street/wall-street';
import { StPatrickCathedralPage } from '../pages/st-patrick-cathedral/st-patrick-cathedral';
import { CentralParkPage } from '../pages/central-park/central-park';
import { EmpireStateBuildingPage } from '../pages/empire-state-building/empire-state-building';
import { LibraryPage } from '../pages/library/library';
import { RadioCityPage } from '../pages/radio-city/radio-city';
import { ActivitiesPage } from '../pages/activities/activities';
import { HelicopterPage } from '../pages/helicopter/helicopter';
import {BusPage} from '../pages/bus/bus';
import {CruisePage} from '../pages/cruise/cruise';
import {RidingPage} from '../pages/riding/riding';
import {CyclingPage} from '../pages/cycling/cycling';
import {SummertimePage} from '../pages/summertime/summertime';
import {FestivalPage} from '../pages/festival/festival';
import {SwimmingPage} from '../pages/swimming/swimming';
import {FerryPage} from '../pages/ferry/ferry';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlacesPage,
    LibertyPage,
    TimeSquarePage,
    FifthAvenuePage,
    WallStreetPage,
    StPatrickCathedralPage,
    CentralParkPage,
    EmpireStateBuildingPage,
    LibraryPage,
    RadioCityPage,
    ActivitiesPage,
    HelicopterPage,
    BusPage,
    CruisePage,
    RidingPage,
    CyclingPage,
    SummertimePage,
    FestivalPage,
    SwimmingPage,
    FerryPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlacesPage,
    LibertyPage,
    TimeSquarePage,
    FifthAvenuePage,
    WallStreetPage,
    StPatrickCathedralPage,
    CentralParkPage,
    EmpireStateBuildingPage,
    LibraryPage,
    RadioCityPage,
    ActivitiesPage,
    HelicopterPage,
    BusPage,
    CruisePage,
    RidingPage,
    CyclingPage,
    SummertimePage,
    FestivalPage,
    SwimmingPage,
    FerryPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
