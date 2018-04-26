import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';

@IonicPage()
@Component({
  selector: 'page-swimming',
  templateUrl: 'swimming.html',
})
export class SwimmingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwimmingPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }
  
}
