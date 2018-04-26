import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';


@IonicPage()
@Component({
  selector: 'page-st-patrick-cathedral',
  templateUrl: 'st-patrick-cathedral.html',
})
export class StPatrickCathedralPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StPatrickCathedralPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }

}
