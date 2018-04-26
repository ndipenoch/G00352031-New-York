import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';

/**
 * Generated class for the LibertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liberty',
  templateUrl: 'liberty.html',
})
export class LibertyPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LibertyPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }
  
}
