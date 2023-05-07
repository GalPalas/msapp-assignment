import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ImageSliderService } from '../services/image-slider.service';
import * as ImagesActions from './actions';
import { ImageSliderInterface } from '../types/image-slider.interface';

@Injectable()
export class ImageEffects {
  getImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ImagesActions.getImages),
      mergeMap(() => {
        return this.ImageSliderService.getImages().pipe(
          map((images: any) => ImagesActions.getImagesSuccess({ images })),
          catchError((error) =>
            of(ImagesActions.getImagesFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private ImageSliderService: ImageSliderService
  ) {}
}
