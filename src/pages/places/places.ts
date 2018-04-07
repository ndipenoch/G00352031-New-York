import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LibertyPage} from '../liberty/liberty';
import {TimeSquarePage} from '../time-square/time-square';
import { FifthAvenuePage } from '../fifth-avenue/fifth-avenue';
import { WallStreetPage } from '../wall-street/wall-street';
import { StPatrickCathedralPage } from '../st-patrick-cathedral/st-patrick-cathedral';
import { CentralParkPage } from '../central-park/central-park';
import { EmpireStateBuildingPage } from '../empire-state-building/empire-state-building';
import { LibraryPage } from '../library/library';
import { RadioCityPage } from '../radio-city/radio-city';


@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }
  OpenLiberty(){
    this.navCtrl.push(LibertyPage);}

    OpenTimesquare(){
      this.navCtrl.push(TimeSquarePage);}

      OpenFifthAvenue(){
        this.navCtrl.push(FifthAvenuePage);}

        OpenWallStreetPage(){
          this.navCtrl.push(WallStreetPage);}
        
          OpenStPatrickCathedral(){
            this.navCtrl.push(StPatrickCathedralPage);}

            OpenCentralPark(){
              this.navCtrl.push(CentralParkPage);}

              OpenEmpireStateBuilding(){
                this.navCtrl.push(EmpireStateBuildingPage);}

                OpenLibrary(){
                  this.navCtrl.push(LibraryPage);}

                  OpenRadioCity(){
                    this.navCtrl.push(RadioCityPage);}
}
