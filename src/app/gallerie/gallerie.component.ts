import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { RequestService } from '../request.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Content, Gallerie, Galleries, RequestGalleryListApi } from '../request-api-interface';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  @Input() id = "";

  showGalleryListApi: boolean = false;

  constructor(private Request: RequestService) { }

  galleries: Galleries = {
    total: 0,
    per_page: 0,
    user_id: "",
    continuation: 0,
    gallery: []
  }

  galleriesApi: RequestGalleryListApi = {
    galleries: this.galleries,
    stat: ""
  }

  getGallerie() {
    if (this.galleriesApi.stat === "") {
    this.Request
        .getGallerieList(this.id)
        .subscribe((data: RequestGalleryListApi) => {
          this.galleriesApi = data;
        },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('[getGallerieList] Client-side error occured.');
            } else {
              console.log('[getGallerieList] Server-side error occured.');
            }
          });
    }

    this.showGalleryListApi = !this.showGalleryListApi;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.showGalleryListApi = false;
  }

  ngOnInit(): void {
  }

}
