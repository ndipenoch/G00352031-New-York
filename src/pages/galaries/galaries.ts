import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-galaries',
  templateUrl: 'galaries.html',
})
export class GalariesPage {
 
  /**
 * store the images and messages in an array
 */
  slideData = [{ image: "../assets/imgs/EmpireStateBuilding.jpg",msg:"Empire State Building" }, { image: "../assets/imgs/StPatrickCathedral.jpg",msg:"St. Patrick Cathedral" }, { image: "../assets/imgs/RadioCity.jpg",msg:"Radio City Hall"}, { image: "../assets/imgs/broklynBridge.jpg",msg:"Brooklyn Bridge" }
  ,{ image: "../assets/imgs/cycling.jpg",msg:"Bear Mountain" }, { image: "../assets/imgs/festival.jpg",msg:"Cherry Bessom Festival" }, { image: "../assets/imgs/bryanPark.jpg",msg:"Bryans Park" }, { image: "../assets/imgs/library.jpg",msg:"New York Library" }, { image: "../assets/imgs/summer.jpg",msg:"Coney Island" }, { image: "../assets/imgs/liberty2.jpg",msg:"Statue Of Liberty" }
  ,{ image: "../assets/imgs/background6.jpg",msg:"New York City" }, { image: "../assets/imgs/pool.jpg",msg:"Astoria Park Pool" }, { image: "../assets/imgs/CentralPark.jpg",msg:"Central Park" }, { image: "../assets/imgs/FifthAvenue.jpg",msg:"5th Avenue" }, { image: "../assets/imgs/timeSquare1.jpg",msg:"Time Square" }, { image: "../assets/imgs/terminal.jpg" ,msg:"Grand Terminal"}]
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalariesPage');
  }
  
}
