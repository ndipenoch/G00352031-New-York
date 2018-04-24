import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GalariesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galaries',
  templateUrl: 'galaries.html',
})
export class GalariesPage {
 
  slideData = [{ image: "../assets/imgs/EmpireStateBuilding.jpg",msg:"Empire State Building" }, { image: "../assets/imgs/StPatrickCathedral.jpg",msg:"St. Patrick Cathedral" }, { image: "../assets/imgs/RadioCity.jpg",msg:"Radio City Hall"}, { image: "../assets/imgs/broklynBridge.jpg",msg:"Broklyn Bridge" }
  ,{ image: "../assets/imgs/cycling.jpg",msg:"Cycling" }, { image: "../assets/imgs/festival.jpg",msg:"Cherry Bessom Festival" }, { image: "../assets/imgs/bryanPark.jpg",msg:"Bryans Park" }, { image: "../assets/imgs/library.jpg",msg:"New York Library" }, { image: "../assets/imgs/summer.jpg",msg:"Summer Pool" }, { image: "../assets/imgs/liberty2.jpg",msg:"Statue Of Liberty" }
  ,{ image: "../assets/imgs/background6.jpg",msg:"New York City" }, { image: "../assets/imgs/pool.jpg",msg:"Outdoor Pool" }, { image: "../assets/imgs/CentralPark.jpg",msg:"Central Park" }, { image: "../assets/imgs/FifthAvenue.jpg",msg:"5th Avenue" }, { image: "../assets/imgs/timeSquare1.jpg",msg:"Time Square" }, { image: "../assets/imgs/terminal.jpg" ,msg:"Grand Terminal"}]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalariesPage');
  }
  
}
