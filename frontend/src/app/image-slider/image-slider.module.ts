import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ImagesComponent } from './components/images/images.component';
import { EffectsModule } from '@ngrx/effects';
import { ImageEffects } from './store/effects';
import { ImageGridComponent } from './components/image-grid/image-grid.component';

@NgModule({
  declarations: [ImagesComponent, ImageGridComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('images', reducers),
    EffectsModule.forFeature([ImageEffects]),
  ],
  exports: [ImagesComponent],
})
export class ImageSliderModule {}
