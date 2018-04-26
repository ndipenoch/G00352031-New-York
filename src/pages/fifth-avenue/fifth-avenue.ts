import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';


@IonicPage()
@Component({
  selector: 'page-fifth-avenue',
  templateUrl: 'fifth-avenue.html',
})
export class FifthAvenuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FifthAvenuePage');
  }
  
  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }
  
}
