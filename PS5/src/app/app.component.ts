

import { Component } from '@angular/core';
import { IMAGES} from './IMAGES-MOCK';
import { IMAGE} from './IMAGE';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Images of Flickr Dogs';
  images = IMAGES;
  private selectedImage: IMAGE;


  selectImage(image: IMAGE) {
    this.selectedImage = image;

  }
}
