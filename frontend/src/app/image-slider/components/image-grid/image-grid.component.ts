import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../types/image-slider.interface';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
})
export class ImageGridComponent implements OnInit {
  @Input() images: Image[] = [];

  constructor() {}

  ngOnInit(): void {}
}
