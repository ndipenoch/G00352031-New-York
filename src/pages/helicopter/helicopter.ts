import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';


@IonicPage()
@Component({
  selector: 'page-helicopter',
  templateUrl: 'helicopter.html',
})
export class HelicopterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelicopterPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }
 
}
