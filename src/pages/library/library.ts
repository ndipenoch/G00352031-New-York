import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  location: any;
  latitute: any;
  longitude: any;
  gmLocation: {lat: number, lng: number} = {lat: 0, lng: 0};

  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation,private platform: Platform) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

 
  openLibraryDir(){
    
    this.platform.ready().then(() => {

      // get current position
      this.geolocation.getCurrentPosition().then(pos => {
        this.latitute=pos.coords.latitude;
        this.longitude=pos.coords.latitude;
        pos.coords.longitude;
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        alert("GPS Turn On");
      });

      const watch = this.geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();

    });
  }   

}
