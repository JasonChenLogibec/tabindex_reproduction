import {Component, Input} from '@angular/core';
import {GenericInputComponent} from './generic-input.component';
import {StyleHelperService} from '../helpers/style-helper.service';
import {NumberFieldDefinition} from '../definitions/field.definitions';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';

@Component({
  selector: 'form-number-input',
  styleUrls: ['./generic-input.component.css'],
  templateUrl: './number-input.component.html'
})
export class NumberInputComponent extends GenericInputComponent {
  constructor(_fieldProperties: FieldPropertiesConstants, _styleHelper: StyleHelperService) {
    super(_fieldProperties, _styleHelper);
  }

  isFocused = false;

  @Input()
  component: NumberFieldDefinition;

  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
  }
}
