import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { RequestService } from './request.service';
import { RequestApi, PhotosObj } from './request-api-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flickr';

  tags = "";
  tags_tmp = "";
  list_display = true;
  photos: PhotosObj = {
    page: 0,
    pages: 0,
    prepage: 0,
    total: '',
    photo: []
  };

  constructor(private Request: RequestService) { }

  ngOnInit() { }
  setTags() {
    this.tags = this.tags_tmp;
    this.Request
        .getSearchedImages(this.tags)
        .subscribe((data: RequestApi) => {
          this.photos = data.photos;
          //this.Request.totalColors.next(this.photos.length);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('[Ex2Comp2Component] Client-side error occured.');
          } else {
            console.log('[Ex2Comp2Component] Server-side error occured.');
          }
        });
  }
}
