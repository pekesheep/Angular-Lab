import { Component, OnInit } from '@angular/core';
import { IMAGES } from './mock-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  images = IMAGES;
  bigImage = this.images[0].src;
  BigImgIndex = 0;
  start = 0;
  end = 3;
  onPlay = true;
  onStop = false;
  zoomPercent = 60;
  highlightSmallImage = false;



  constructor() {


  }

  ngOnInit(): void {
  }


  selectImage(currentImgIndex: number) {
    this.bigImage = this.images[currentImgIndex].src;
    this.BigImgIndex = currentImgIndex;
    return this.bigImage;
  }

  nextSmallImage() {
    this.start++;
    this.end++;
  }

  previousSmallImage() {
    this.start--;
    this.end--;
  }

  nextBigImage() {
    this.BigImgIndex++;
    this.bigImage = this.images[this.BigImgIndex].src;

  }

  previousBigImage() {
    this.BigImgIndex--;
    this.bigImage = this.images[this.BigImgIndex].src;
  }

  sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  async play() {
    this.onStop = true;
    this.onPlay = false;
    while (this.BigImgIndex < this.images.length && this.onPlay === false) {
      console.log(this.images.length);
      this.BigImgIndex++;
      this.bigImage = this.images[this.BigImgIndex].src;
      await this.sleep(2000);
      if (this.BigImgIndex === this.images.length - 1) {
        this.BigImgIndex = -1;
      }
    }
  }

  stop() {
    this.onPlay = true;
    this.onStop = false;
  }

  zoomIn() {
    this.zoomPercent = this.zoomPercent + 10;
  }

  zoomOut() {
    this.zoomPercent = this.zoomPercent - 10;
  }


}
