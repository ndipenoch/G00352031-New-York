import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';


@IonicPage()
@Component({
  selector: 'page-ferry',
  templateUrl: 'ferry.html',
})
export class FerryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FerryPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }

}
