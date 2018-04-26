import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';

@IonicPage()
@Component({
  selector: 'page-cycling',
  templateUrl: 'cycling.html',
})
export class CyclingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CyclingPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }

}
