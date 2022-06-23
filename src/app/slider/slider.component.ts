import { Component, OnInit, Input } from '@angular/core';
import { PhotoInfo } from '../request-api-interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  num_image = 0;
  @Input() nb_image = 0;

  @Input() photos: PhotoInfo[] = [];

  display_info = false;

  toggle_info() {
    this.display_info = !this.display_info;
  }

  constructor() { }

  ngOnInit(): void {
  }

  nextImg() {
    this.num_image = (this.num_image + 1) % this.nb_image;
  }

  prevImg() {
    this.num_image = this.num_image - 1;
    if (this.num_image < 0) {
      this.num_image += this.nb_image;
    }
  }


}
