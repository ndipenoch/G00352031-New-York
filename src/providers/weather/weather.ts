import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }
  getdegrees(): Observable<any>{ 
    return this.http.get("https://jsonblob.com/api/jsonblob/5da0f49d-402f-11e8-a8a1-4fa02130f6ad");

   }
}
