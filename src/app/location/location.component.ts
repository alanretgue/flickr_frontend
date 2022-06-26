import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { PhotoLocation, Location, LocationContent, RequestLocationApi } from '../request-api-interface';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnChanges {

  @Input() id = "";
  

  locality: LocationContent = {
    _content: "",
    woeid: ""
  };
  county: LocationContent = {
    _content: "",
    woeid: ""
  };
  region: LocationContent = {
    _content: "",
    woeid: ""
  };
  country: LocationContent = {
    _content: "",
    woeid: ""
  };
  neighbourhood: LocationContent = {
    _content: "",
    woeid: ""
  };

  location: Location = {
    latitude: 0,
    longitude: 0,
    accuracy: 0,
    context: 0,
    locality: this.locality,
    county: this.county,
    region: this.region,
    country: this.country,
    neighbourhood: this.neighbourhood
  };

  photoLocation: PhotoLocation = {
    id: '',
    location: this.location,
  };

  requestLocation: RequestLocationApi = {
    photo: this.photoLocation,
    stat: ""
  }

  constructor(private Request: RequestService) { }

  getLocation() {
    this.Request
        .getLocation(this.id)
        .subscribe((data: RequestLocationApi) => {
          this.requestLocation = data;
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

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.id = changes['id'].currentValue;
    // console.log(this.requestLocation.stat);
    this.getLocation();
    if (!changes['id'].isFirstChange) {
      this.getLocation();
      // console.log(this.requestLocation.stat);
    }
  }
}
