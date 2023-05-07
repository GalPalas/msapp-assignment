import { createReducer, on } from '@ngrx/store';
import { ImageSliderStateInterface } from '../types/imageSliderState.interface';
import * as ImagesActions from './actions';

export const initialState: ImageSliderStateInterface = {
  isLoading: false,
  images: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(ImagesActions.getImages, (state) => ({ ...state, isLoading: true })),
  on(ImagesActions.getImagesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    images: action.images,
  })),
  on(ImagesActions.getImagesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
