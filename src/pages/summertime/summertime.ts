import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';


@IonicPage()
@Component({
  selector: 'page-summertime',
  templateUrl: 'summertime.html',
})
export class SummertimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummertimePage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }
  
}
