import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.images;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const imagesSelector = createSelector(
  selectFeature,
  (state) => state.images
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
