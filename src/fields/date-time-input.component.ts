import {Component, Input} from '@angular/core';
import {GenericInputComponent} from './generic-input.component';
import {DateFieldDefinition, DateTimeFieldDefinition} from '../definitions/field.definitions';
import {StyleHelperService} from '../helpers/style-helper.service';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';

@Component({
  selector: 'form-date-time-input',
  styleUrls: ['./generic-input.component.css'],
  templateUrl: './date-time-input.component.html'
})
export class DateTimeInputComponent extends GenericInputComponent {
  constructor(_fieldProperties: FieldPropertiesConstants, _styleHelper: StyleHelperService) {
    super(_fieldProperties, _styleHelper);
  }

  isFocused = false;

  @Input()
  component: DateTimeFieldDefinition | DateFieldDefinition;

  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
  }
}
