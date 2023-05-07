import { createAction, props } from '@ngrx/store';
import { ImageSliderInterface } from '../types/image-slider.interface';

export const getImages = createAction('[ImageSlider Component] Get Images');

export const getImagesSuccess = createAction(
  '[ImageSlider Component] Get Images success',
  props<{ images: ImageSliderInterface[] }>()
);
export const getImagesFailure = createAction(
  '[ImageSlider Component] Get Images failure',
  props<{ error: string }>()
);
