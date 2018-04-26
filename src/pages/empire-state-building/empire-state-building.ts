import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';


@IonicPage()
@Component({
  selector: 'page-empire-state-building',
  templateUrl: 'empire-state-building.html',
})
export class EmpireStateBuildingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpireStateBuildingPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }
  
}
