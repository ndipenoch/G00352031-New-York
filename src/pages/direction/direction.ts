import { Component,ViewChild,ElementRef} from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {HomePage} from './../home/home';
import {Storage} from '@ionic/storage';

declare var google;

/**
 * Generated class for the DirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-direction',
  templateUrl: 'direction.html',
})
export class DirectionPage {

  
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;
  city:any;
  constructor(public navCtrl: NavController,private geolocation: Geolocation,private storage:Storage) {
  }
  
  saveCity(){ 
    this.storage.set("city", this.city); 
    }

  ionViewDidLoad() {

    this.loadMap();
    this.startNavigating();
    console.log('ionViewDidLoad DirectionPage');
  }

  loadMap(){
   
    this.geolocation.getCurrentPosition().then((position) => {

    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   
  }, (err) => {
    console.log(err);
  });

}


ionViewWillEnter(){ 
  this.storage.get("city") .then((data) => { 
  this.city = data; 
    }) .catch((err) => { 
    alert("Error accesssing Storage")
  })
 }

startNavigating(){

  this.geolocation.getCurrentPosition().then((position) => {

    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
  
        origin: latLng,
        destination:this.city,
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });

  }, (err) => {
    console.log(err);
  });

}

openHome(){ 
  this.navCtrl.push(HomePage); 
}

}
