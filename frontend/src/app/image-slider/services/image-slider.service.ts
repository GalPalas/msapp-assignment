import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageSliderInterface } from '../types/image-slider.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageSliderService {
  private readonly url =
    'https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&page=1&per_page=9';

  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get<ImageSliderInterface>(this.url);
  }

  getImagesByCategory(category: string) {
    console.log(`${this.url}&q=${category}`);
    return this.http.get<ImageSliderInterface>(`${this.url}&q=${category}`);
  }

  getNextPage(category: string, page: number) {
    return this.http.get<ImageSliderInterface>(
      `${this.url}&q=${category}&page=${page}&per_page=9`
    );
  }

  getPrevPage(category: string, page: number) {
    return this.http.get<ImageSliderInterface>(
      `${this.url}&q=${category}&page=${page}&per_page=9`
    );
  }
}
