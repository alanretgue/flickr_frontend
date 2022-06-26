import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { RequestService } from '../request.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Profile, RequestProfileApi } from '../request-api-interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges {

  @Input() id = "";

  constructor(private Request: RequestService) { }
  profile: Profile = {
    id: "",
    nsid: "",
    join_date: "",
    occupation: "",
    hometown: "",
    showcase_set: "",
    showcase_set_title: "",
    first_name: "",
    last_name: "",
    profile_description: "",
    website: "",
    city: "",
    country: "",
    facebook: "",
    twitter: "",
    tumblr: "",
    instagram: "",
    pinterest: ""
  }

  profileApi: RequestProfileApi = {
    profile: this.profile,
    stat: ""
  }

  getProfile() {
    this.Request
        .getProfile(this.id)
        .subscribe((data: RequestProfileApi) => {
          this.profileApi = data;
        },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('[getProfile] Client-side error occured.');
            } else {
              console.log('[getProfile] Server-side error occured.');
            }
          });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.id = changes['id'].currentValue;
    this.getProfile();
    if (!changes['id'].isFirstChange) {
      this.getProfile();
    }
  }

}
