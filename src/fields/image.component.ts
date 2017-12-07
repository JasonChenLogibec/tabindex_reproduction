import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AmbientModel} from '../definitions/form.definitions';
import {FieldProperty, ImageDefinition} from '../definitions/field.definitions';

@Component({
  selector: 'form-image',
  templateUrl: './image.component.html'
})
export class ImageComponent implements OnInit {
  @Input()
  model: AmbientModel;

  @Input()
  component: ImageDefinition;

  isVisible: FieldProperty;

  @ViewChild('imageCanvas')
  public set imageRef(value: ElementRef) {
    if (!value)
      return;

    if (!this._image)
      this._image = value.nativeElement;

    this.drawImage();
  }

  ngOnInit(): void {
    this.isInitialized = true;
    this.isVisible = this.model.properties[this.component.componentId].visible;
    this.drawImage();
  }

  private isDrawn = false;

  private isInitialized = false;

  private _image: HTMLCanvasElement = null;

  private drawImage() {
    if (this.isDrawn || !this.isInitialized || !this._image)
      return;

    let execContext = this,
      imgContext = this._image.getContext('2d'),
      width = this.component.width,
      height = this.component.height,
      image = new Image(),
      imageRawData: string =
        window.btoa(
          this.model.properties[this.component.componentId].image.currentValue
            .match(/\w{2}/g || [])
            .map(a => String.fromCharCode(parseInt(a, 16)))
            .join('')),
      onLoadOnce = () => {
        imgContext.drawImage(image, 0, 0, width, height);
        execContext.isDrawn = true;
        image.removeEventListener('load', onLoadOnce);
        image = null;
      };

    image.addEventListener('load', onLoadOnce);
    image.src = 'data:image/png;base64,' + imageRawData;
  }
}
