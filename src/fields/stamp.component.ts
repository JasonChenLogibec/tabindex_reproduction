import {GenericInputComponent} from './generic-input.component';
import {Component, Input} from '@angular/core';
import {StyleHelperService} from '../helpers/style-helper.service';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';
import {StampFieldDefinition} from '../definitions/field.definitions';

@Component({
  selector: 'form-stamp',
  styleUrls: ['./generic-input.component.css'],
  templateUrl: './stamp.component.html'
})
export class StampComponent extends GenericInputComponent {
  constructor(_fieldProperties: FieldPropertiesConstants, _styleHelper: StyleHelperService) {
    super(_fieldProperties, _styleHelper);
  }

  isFocused = false;

  @Input()
  component: StampFieldDefinition;

  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
  }
}
