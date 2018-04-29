import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'


@Injectable()
export class WeatherProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }
   /**
 * read and get weather data from weather API 
 */
  getdegrees(): Observable<any>{ 
    return this.http.get("https://jsonblob.com/api/jsonblob/5da0f49d-402f-11e8-a8a1-4fa02130f6ad");

   }
}
