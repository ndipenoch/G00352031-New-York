import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
 

  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LibertyPage');
  }

  openLibertDir(){
    
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     }); 
      
  }
 

}
