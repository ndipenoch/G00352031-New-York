import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesPage } from './../places/places';
import { ActivitiesPage } from './../activities/activities';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  openPlaces() { 
    this.navCtrl.push(PlacesPage); 
  }
 
  openActivities() { 
    this.navCtrl.push(ActivitiesPage);
   }

}
