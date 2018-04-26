import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';


@IonicPage()
@Component({
  selector: 'page-cruise',
  templateUrl: 'cruise.html',
})
export class CruisePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CruisePage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }
  
}
