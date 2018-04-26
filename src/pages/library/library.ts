import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectionPage} from './../direction/direction';


@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  openDirections() { 
    this.navCtrl.push(DirectionPage); 
  }

}
