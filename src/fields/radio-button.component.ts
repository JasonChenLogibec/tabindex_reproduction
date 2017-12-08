import {GenericInputComponent} from './generic-input.component';
import {Component, Input, OnInit} from '@angular/core';
import {RadioDefinition} from '../definitions/field.definitions';
import {StyleHelperService} from '../helpers/style-helper.service';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';

@Component({
  selector: 'form-radio',
  styleUrls: ['./generic-input.component.css', './checkbox.component.css', './radio-button.component.css'],
  templateUrl: './radio-button.component.html'
})
export class RadioButtonComponent
  extends GenericInputComponent
  implements OnInit {
  constructor(_fieldProperties: FieldPropertiesConstants, _styleHelper: StyleHelperService) {
    super(_fieldProperties, _styleHelper);
  }

  @Input()
  component: RadioDefinition;

  @Input()
  radioConfiguration: { [componentId: string]: string; };

  isFocused = false;
  groupIndex: string;
  groupName: string;

  handleFocus() {
    this.isFocused = true;
  }

  handleKeydown(event: KeyboardEvent) {
    // TODO: Handle tabindex if cannot reproduce slow behaviour.
    /* tabindex is handled manually for radios: in our model, the
     * requirements clearly define the tabindex PER RADIO (instead
     * of per group).
     */
  }

  handleBlur() {
    this.isFocused = false;
  }

  protected get isRequiredAndMissing() {
    return this.model.isRequired(this.component.componentId) && !this.model.form.data[this.groupName];
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.groupIndex = this.radioConfiguration[this.component.componentId] || '0_' + this.component.componentId;
    this.groupName = 'radioGroup' + this.groupIndex;

    /* Additional calculations for the radius of the inner circles here (one for
     * active circles and another for inactive ones --they may differ according to
     * user configuration). As those are unlikely to cause issues with the
     * slowness of the tab-index (given that they are only computed once and remain
     * thereafter unchanging), we omit them from the min. repro.
     */
  }
}
