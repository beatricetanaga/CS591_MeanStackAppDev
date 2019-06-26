import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flickrTag: string;
  lastSearch: string;
  photos: any;
  constructor(private httpClient: HttpClient, private ref: ChangeDetectorRef) {
  }
  // title = 'PS6';

  get_images(): any {
    if ( this.flickrTag.length < 1 || this.lastSearch === this.flickrTag) {
      console.log('same tag');
      return;
    }
    return this.httpClient.get('/api/ps4/' + this.flickrTag).subscribe((res:any) => {
      console.log(res);
      this.lastSearch = this.flickrTag;
      this.photos = res.photos.photo;
      this.ref.detectChanges();
    });
  }
}
