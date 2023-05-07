import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as ImagesActions from '../../store/actions';
import {
  errorSelector,
  isLoadingSelector,
  imagesSelector,
} from '../../store/selectors';
import {
  Image,
  ImageSliderInterface,
} from '../../types/image-slider.interface';
import { ImageSliderService } from '../../services/image-slider.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  images$: Observable<ImageSliderInterface[]>;

  images: Image[] = [];
  categories: string[] = [
    'animals',
    'industry',
    'computer',
    'food',
    'sports',
    'transportation',
    'travel',
  ];
  currentPage: number = 1;
  selectCategory: string = '';

  constructor(
    private store: Store<AppStateInterface>,
    private imageSliderService: ImageSliderService
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.images$ = this.store.pipe(select(imagesSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(ImagesActions.getImages());

    this.imageSliderService.getImages().subscribe((data) => {
      const { hits } = data;
      this.images = hits;
    });
  }

  fetchByCategory(category: string) {
    this.selectCategory = category;
    this.imageSliderService.getImagesByCategory(category).subscribe((data) => {
      const { hits } = data;
      this.images = hits;
    });
  }

  PaginateNext() {
    this.currentPage = this.currentPage + 1;
    this.imageSliderService
      .getNextPage(this.selectCategory, this.currentPage)
      .subscribe((data) => {
        const { hits } = data;
        this.images = hits;
      });
  }

  PaginatePrev() {
    if (this.currentPage <= 1) {
      this.currentPage = 1;
    } else {
      this.currentPage = this.currentPage - 1;
    }
    this.imageSliderService
      .getPrevPage(this.selectCategory, this.currentPage)
      .subscribe((data) => {
        const { hits } = data;
        this.images = hits;
      });
  }
}
