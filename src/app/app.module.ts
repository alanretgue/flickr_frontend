import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { CommentsComponent } from './comments/comments.component';
import { LocationComponent } from './location/location.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CommentsComponent,
    LocationComponent,
    GallerieComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [/*Request*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
