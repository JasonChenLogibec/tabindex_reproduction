import {GenericInputComponent} from './generic-input.component';
import {Component, Input} from '@angular/core';
import {DisplayTextDefinition} from '../definitions/field.definitions';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';
import {StyleHelperService} from '../helpers/style-helper.service';

@Component({
  selector: 'form-label',
  styleUrls: ['./generic-input.component.css', './form-label.component.css'],
  templateUrl: './form-label.component.html'
})
export class FormLabelComponent extends GenericInputComponent {
  constructor(_fieldProperties: FieldPropertiesConstants,
              _styleHelper: StyleHelperService) {
    super(_fieldProperties, _styleHelper);
  }

  @Input()
  component: DisplayTextDefinition;
}
