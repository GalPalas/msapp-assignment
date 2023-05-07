export interface Image {
  id: number;
  userImageURL: string;
  webformatURL: string;
}

export interface ImageSliderInterface {
  total: number;
  totalHits: number;
  hits: Image[];
}
