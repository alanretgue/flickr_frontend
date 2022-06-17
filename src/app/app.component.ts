import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { RequestService } from './request.service';
import { RequestApi, PhotosObj, RequestLocationApi, PhotoLocation, Location, LocationContent } from './request-api-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flickr';

  tags = "";
  tags_tmp = "";

  list_display = false;

  photos: PhotosObj = {
    page: 0,
    pages: 0,
    prepage: 0,
    total: '',
    photo: []
  };

  
  nb_image = 0;

  constructor(private Request: RequestService) { }

  ngOnInit() {
    this.tags = this.tags_tmp;
    this.Request
        .getRecent()
        .subscribe((data: RequestApi) => {
          this.photos = data.photos;
          this.nb_image = this.photos.photo.length;
          //this.Request.totalColors.next(this.photos.length);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('[getRecent] Client-side error occured.');
          } else {
            console.log('[getRecent] Server-side error occured.');
          }
        });
   }

  setTags() {
    this.tags = this.tags_tmp;
    this.Request
        .getSearchedImages(this.tags)
        .subscribe((data: RequestApi) => {
          this.photos = data.photos;
          this.nb_image = this.photos.photo.length;
          //this.Request.totalColors.next(this.photos.length);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('[getSearchedImages] Client-side error occured.');
          } else {
            console.log('[getSearchedImages] Server-side error occured.');
          }
        });
  }


}
