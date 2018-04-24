import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesPage } from './../places/places';
import { ActivitiesPage } from './../activities/activities';
import { GalariesPage } from './../galaries/galaries';
import { VideoPage} from './../video/video';
import { WeatherPage} from './../weather/weather';
import {WeatherProvider} from '../../providers/weather/weather';
import {FeedbackPage} from './../feedback/feedback';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myName: string;
  degrees: any[]=[]; 

  constructor(public navCtrl: NavController,private mp:WeatherProvider, private storage: Storage) {
  }
  
  ionViewDidLoad(){ 
    this.mp.getdegrees().subscribe(data => 
      { 
        this.degrees = data.Search; 
      }); 
    }


  openPlaces() { 
    this.navCtrl.push(PlacesPage); 
  }
 
  openActivities() { 
    this.navCtrl.push(ActivitiesPage);
   }

   openGalaries() { 
    this.navCtrl.push(GalariesPage);
   }

   openVideo() { 
    this.navCtrl.push(VideoPage);
   }

   openWeather() { 
    this.navCtrl.push(WeatherPage);
   }

   openFeedback() { 
    this.navCtrl.push(FeedbackPage);
   }

   ionViewWillEnter(){ 
     this.storage.get("myName") .then((data) => {
        this.myName = data; }) .catch((err) => 
        { 
          alert("Error accesssing Storage") 
      }) 
    }

}
