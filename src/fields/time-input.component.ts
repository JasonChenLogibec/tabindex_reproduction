import {StyleHelperService} from '../helpers/style-helper.service';
import {TimeFieldDefinition} from '../definitions/field.definitions';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';
import {Component, Input} from '@angular/core';
import {GenericInputComponent} from './generic-input.component';

@Component({
  selector: 'form-time-input',
  styleUrls: ['./generic-input.component.css'],
  templateUrl: './time-input.component.html'
})
export class TimeInputComponent extends GenericInputComponent {
  constructor(_fieldProperties: FieldPropertiesConstants, _styleHelper: StyleHelperService) {
    super(_fieldProperties, _styleHelper);
  }

  isFocused = false;

  @Input()
  component: TimeFieldDefinition;

  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
  }
}
