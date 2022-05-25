import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import {RequestApi} from './request-api-interface';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  totalColors: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  key_api = "fc6411b0cfb976bdef4237e78adf9fae";

  constructor(private http: HttpClient) { }

  getSearchedImages(tags: string): Observable<RequestApi> {
    return this.http.get<RequestApi>('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.key_api + '&tags=' + tags + '&format=json&nojsoncallback=1');
  }
}
