import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';

@IonicPage()
@Component({
  selector: 'page-radio-city',
  templateUrl: 'radio-city.html',
})
export class RadioCityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioCityPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }
  
}
