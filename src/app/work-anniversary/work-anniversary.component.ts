import { Component, OnInit } from '@angular/core';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-work-anniversary',
  templateUrl: './work-anniversary.component.html',
  styleUrls: ['./work-anniversary.component.scss'],
})
export class WorkAnniversaryComponent implements OnInit {
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
}
