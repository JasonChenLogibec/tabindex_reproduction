import {Component, Input} from '@angular/core';
import {GenericInputComponent} from './generic-input.component';
import {TextFieldDefinition} from '../definitions/field.definitions';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';
import {StyleHelperService} from '../helpers/style-helper.service';

@Component({
  selector: 'form-text-input',
  styleUrls: ['./text-input.component.css'],
  templateUrl: './text-input.component.html'
})
export class TextInputComponent extends GenericInputComponent {
  constructor(_fieldProperties: FieldPropertiesConstants, _styleHelper: StyleHelperService) {
    super(_fieldProperties, _styleHelper);
  }

  isFocused = false;

  @Input()
  component: TextFieldDefinition;

  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
  }
}
