import { Component, OnInit } from '@angular/core';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss'],
})
export class FestivalComponent implements OnInit {
  imageSrc: any;

  title: any = 'आषाढ़ी बीज';
  isEditTitle: boolean = false;

  message: any = 'Many many happy return of day';
  isEditMessage: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  generateImage() {
    var node: any = document.getElementById('image-section');
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);

      reader.readAsDataURL(file);
    }
  }
}
