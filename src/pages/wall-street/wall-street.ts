import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';


@IonicPage()
@Component({
  selector: 'page-wall-street',
  templateUrl: 'wall-street.html',
})
export class WallStreetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WallStreetPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }

}
