import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';


@IonicPage()
@Component({
  selector: 'page-festival',
  templateUrl: 'festival.html',
})
export class FestivalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FestivalPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }

}
