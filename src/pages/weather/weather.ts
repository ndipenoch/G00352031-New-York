import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeatherProvider} from '../../providers/weather/weather';


@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  degrees:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private mp:WeatherProvider) {
  }

 /**
 * search for data in the array Search from the weather API in weather provider
 */
  ionViewDidLoad() {
    this.mp.getdegrees().subscribe(data=> 
      {
      this.degrees = data.Search;
    }
 )
  console.log("I am alive!");
  }

}