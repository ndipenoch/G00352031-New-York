import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HelicopterPage} from '../helicopter/helicopter';
import {BusPage} from '../bus/bus';
import {CruisePage} from '../cruise/cruise';
import {RidingPage} from '../riding/riding';
import {CyclingPage} from '../cycling/cycling';
import {SummertimePage} from '../summertime/summertime';
import {FestivalPage} from '../festival/festival';
import {SwimmingPage} from '../swimming/swimming';
import {FerryPage} from '../ferry/ferry';

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }

  OpenHelicopter(){
    this.navCtrl.push(HelicopterPage);}

    OpenBus(){
      this.navCtrl.push(BusPage);}

      OpenCruise(){
        this.navCtrl.push(CruisePage);}

        OpenRiding(){
          this.navCtrl.push(RidingPage);}

          OpenCycling(){
            this.navCtrl.push(CyclingPage);}

            OpenSummertime(){
              this.navCtrl.push(SummertimePage);}

              OpenFestival(){
                this.navCtrl.push(FestivalPage);}

                OpenSwimming(){
                  this.navCtrl.push(SwimmingPage);}

                  OpenFerryPage(){
                    this.navCtrl.push(FerryPage);}
}
