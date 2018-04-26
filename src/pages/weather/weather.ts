import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeatherProvider} from '../../providers/weather/weather';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  degrees:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private mp:WeatherProvider) {
  }

  ionViewDidLoad() {
    this.mp.getdegrees().subscribe(data=> 
      {
      this.degrees = data.Search;
    }
 )
  console.log("I am alive!");
  }

}
