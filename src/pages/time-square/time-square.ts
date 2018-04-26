import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';

@IonicPage()
@Component({
  selector: 'page-time-square',
  templateUrl: 'time-square.html',
})
export class TimeSquarePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeSquarePage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }

}
