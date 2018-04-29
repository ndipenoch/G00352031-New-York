import { Component,ViewChild, ElementRef,NgZone} from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  latLng:any;
  markers:any;
  mapOptions:any;  
  isKM:any=500;
  isType:any="";
  service: any;
  autocompleteItems:any;
  geocoder:any;
  GooglePlaces:any;
  nearbyItems:any;

  
  constructor(public navCtrl: NavController,private geolocation: Geolocation,private ngZone: NgZone) {
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }

   /**
 * load map and get current location from the position of the coordoniate of the longitude and latitute
 */
  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
    this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    console.log('latLng',this.latLng);
      this.mapOptions = {
        center: this.latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }   
    
this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

    }, (err) => {
      alert('err '+err);
    });

  }
 
 /**
 * serch for nearby places using PlacesService library from Google API stored in index.html
 */
  nearbyPlace(){
    this.loadMap();
    this.markers = [];
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
              location: this.latLng,
              radius: this.isKM,
              types: [this.isType]
            }, (results, status) => {
                this.callback(results, status);
            });
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }

  /**
 * create a maker for each place found
 */
  createMarker(place){
    var placeLoc = place;
    console.log('placeLoc',placeLoc);
    this.markers = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location
    });

    let infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(this.markers, 'click', () => {
      this.ngZone.run(() => {
        infowindow.setContent(place.name);
        infowindow.open(this.map, this.markers);
      });
    });
  }


  
}