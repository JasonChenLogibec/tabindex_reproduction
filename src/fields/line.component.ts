import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {StyleHelperService} from '../helpers/style-helper.service';
import {FieldProperty, LineDefinition} from '../definitions/field.definitions';
import {AmbientModel} from '../definitions/form.definitions';

@Component({
  selector: 'form-line',
  styleUrls: ['line.css'],
  templateUrl: './line.component.html'
})
export class LineComponent implements OnInit {
  constructor(private styleHelper: StyleHelperService) {
  }

  @Input()
  component: LineDefinition;

  @Input()
  model: AmbientModel;

  isVisible: FieldProperty;

  dashArray: string;
  normalizedX1: number;
  normalizedX2: number;
  normalizedY1: number;
  normalizedY2: number;

  ngOnInit(): void {
    this.isVisible = <FieldProperty>this.model.properties[this.component.componentId].visible;
    this.dashArray = this.styleHelper.toDashArray(this.component.lineStyle, true);

    let minX = Math.min(this.component.x1, this.component.x2),
      minY = Math.min(this.component.y1, this.component.y2),
      halfThickness = this.component.lineWidth / 2;

    this.normalizedX1 = this.component.x1 - minX + halfThickness;
    this.normalizedX2 = this.component.x2 - minX + halfThickness;
    this.normalizedY1 = this.component.y1 - minY + halfThickness;
    this.normalizedY2 = this.component.y2 - minY + halfThickness;

    // Handle points && vertical lines (x1 === x2 && y1 !== y2)
    if (this.normalizedX1 === this.normalizedX2) {
      if (this.normalizedY1 < this.normalizedY2) {
        this.normalizedY1 = 0;
        this.normalizedY2 += halfThickness + 1;
      } else if (this.normalizedY2 < this.normalizedY1) {
        this.normalizedY1 += halfThickness + 1;
        this.normalizedY2 = 0;
      } else {
        // noinspection JSSuspiciousNameCombination
        this.normalizedY2 = this.component.lineWidth;
        this.normalizedY1 = 0;
      }
    }
    // Handle horizontal lines
    else if (this.normalizedY1 === this.normalizedY2) {
      if (this.normalizedX1 < this.normalizedX2) {
        this.normalizedX1 = 0;
        this.normalizedX2 += halfThickness + 1;
      } else if (this.normalizedX2 < this.normalizedX1) {
        this.normalizedX1 += halfThickness + 1;
        this.normalizedX2 = 0;
      }
    }
    // Handle diagonals
    else {
      if (this.normalizedX1 > this.normalizedX2)
        this.normalizedX1++;
      else
        this.normalizedX2++;

      if (this.normalizedY1 > this.normalizedY2)
        this.normalizedY1++;
      else
        this.normalizedY2++;
    }
  }
}
