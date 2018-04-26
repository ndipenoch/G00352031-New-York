import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';


@IonicPage()
@Component({
  selector: 'page-central-park',
  templateUrl: 'central-park.html',
})
export class CentralParkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CentralParkPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }

}
