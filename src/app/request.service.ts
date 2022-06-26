import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { RequestApi,
  RequestLocationApi,
  RequestCommentsApi,
  RequestGalleryListApi,
  RequestProfileApi } from './request-api-interface';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  totalColors: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  key_api = "b6b71df21066a0420b026994b79f3b61";

  constructor(private http: HttpClient) { }

  getSearchedImages(tags: string, NSFW: boolean): Observable<RequestApi> {
    if (!NSFW) {
      return this.http.get<RequestApi>('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.key_api + '&tags=' + tags + '&safe_search=3&format=json&nojsoncallback=1');
    }
    return this.http.get<RequestApi>('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.key_api + '&tags=' + tags + '&format=json&nojsoncallback=1');
  }

  getRecent(NSFW: boolean): Observable<RequestApi> { 
    if (!NSFW) {
      return this.http.get<RequestApi>('https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=' + this.key_api + '&safe_search=3&format=json&nojsoncallback=1');
    }
    return this.http.get<RequestApi>('https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=' + this.key_api + '&format=json&nojsoncallback=1');
  }

  getLocation(id: string): Observable<RequestLocationApi> { 
    return this.http.get<RequestLocationApi>('https://www.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=' + this.key_api + '&photo_id=' + id + '&format=json&nojsoncallback=1');
  }

  getComments(id: string): Observable<RequestCommentsApi> { 
    return this.http.get<RequestCommentsApi>('https://www.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=' + this.key_api + '&photo_id=' + id + '&format=json&nojsoncallback=1');
  }

  getGallerieList(id: string): Observable<RequestGalleryListApi> { 
    return this.http.get<RequestGalleryListApi>('https://www.flickr.com/services/rest/?method=flickr.galleries.getList&api_key=' + this.key_api + '&user_id=' + id + '&per_page=499&continuation=0&short_limit=1&format=json&nojsoncallback=1');
  }

  getProfile(id: string): Observable<RequestProfileApi> { 
    return this.http.get<RequestProfileApi>('https://www.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key=' + this.key_api + '&user_id=' + id + '&per_page=499&format=json&nojsoncallback=1');
  }
}