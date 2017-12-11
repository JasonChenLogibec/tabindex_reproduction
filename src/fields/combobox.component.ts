import {GenericInputComponent} from './generic-input.component';
import {Component, Input, OnInit} from '@angular/core';
import {ComboMixDefinition} from '../definitions/field.definitions';
import {StyleHelperService} from '../helpers/style-helper.service';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';

@Component({
  selector: 'form-combobox',
  styleUrls: ['./generic-input.component.css'],
  templateUrl: './combobox.component.html'
})
export class ComboboxComponent extends GenericInputComponent implements OnInit {
  constructor(_fieldProperties: FieldPropertiesConstants, _styleHelper: StyleHelperService) {
    super(_fieldProperties, _styleHelper);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.listId = 'list' + this.fieldId;
  }

  isFocused = false;
  listId: string;

  @Input()
  component: ComboMixDefinition;

  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
  }
}
