import {GenericInputComponent} from './generic-input.component';
import {Component, Input} from '@angular/core';
import {DropDownListDefinition} from '../definitions/field.definitions';
import {StyleHelperService} from '../helpers/style-helper.service';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';

@Component({
  selector: 'form-drop-down',
  styleUrls: ['./generic-input.component.css', './drop-down-list.component.css'],
  templateUrl: './drop-down-list.component.html'
})
export class DropDownListComponent extends GenericInputComponent {
  constructor(_fieldProperties: FieldPropertiesConstants, _styleHelper: StyleHelperService) {
    super(_fieldProperties, _styleHelper);
  }

  isFocused = false;

  @Input()
  component: DropDownListDefinition;

  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
  }
}
