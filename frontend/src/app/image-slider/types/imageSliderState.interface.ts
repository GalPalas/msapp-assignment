import { ImageSliderInterface } from './image-slider.interface';

export interface ImageSliderStateInterface {
  isLoading: boolean;
  images: ImageSliderInterface[];
  error: string | null;
}
