import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';

@IonicPage()
@Component({
  selector: 'page-riding',
  templateUrl: 'riding.html',
})
export class RidingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RidingPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }

}
