import {Component, Input} from '@angular/core';
import {GenericInputComponent} from './generic-input.component';
import {StyleHelperService} from '../helpers/style-helper.service';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';
import {TextFieldDefinition} from '../definitions/field.definitions';

@Component({
  selector: 'form-mask-input',
  styleUrls: ['./generic-input.component.css'],
  templateUrl: './mask-input.component.html'
})
export class MaskInputComponent extends GenericInputComponent {
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
