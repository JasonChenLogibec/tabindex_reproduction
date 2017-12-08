import {GenericInputComponent} from './generic-input.component';
import {Component, Input} from '@angular/core';
import {CheckboxDefinition} from '../definitions/field.definitions';
import {StyleHelperService} from '../helpers/style-helper.service';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';

@Component({
  selector: 'form-checkbox',
  styleUrls: ['./generic-input.component.css', './checkbox.component.css'],
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent extends GenericInputComponent {
  constructor(_fieldProperties: FieldPropertiesConstants, _styleHelper: StyleHelperService) {
    super(_fieldProperties, _styleHelper);
  }

  @Input()
  component: CheckboxDefinition;

  isFocused = false;

  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
  }
}
