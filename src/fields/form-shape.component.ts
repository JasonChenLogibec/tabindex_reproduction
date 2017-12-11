import {Component, Input, OnInit} from '@angular/core';
import {FieldProperty, ShapeDefinition} from '../definitions/field.definitions';
import {AmbientModel} from '../definitions/form.definitions';
import {StyleHelperService} from '../helpers/style-helper.service';
import {SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'form-shape',
  styleUrls: ['./generic-input.component.css'],
  templateUrl: './form-shape.component.html'
})
export class FormShapeComponent implements OnInit {
  constructor(private styleHelper: StyleHelperService) {
  }

  @Input()
  component: ShapeDefinition;

  @Input()
  model: AmbientModel;

  isVisible: FieldProperty;
  fillPattern: SafeHtml;
  fillValue: string;
  strokeDashArray: string;

  ngOnInit(): void {
    let fillSpecs = this.styleHelper.toFillSpecs('pattern' + this.component.componentId, this.component.fillStyle, this.component.fillColor);
    this.isVisible = this.model.properties[this.component.componentId].visible;
    this.fillPattern = fillSpecs.fillPattern;
    this.fillValue = fillSpecs.fillValue;
    this.strokeDashArray = this.styleHelper.toDashArray(this.component.borderStyle);
  }
}
