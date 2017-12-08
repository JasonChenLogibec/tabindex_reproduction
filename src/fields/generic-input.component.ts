import {FieldProperty, PatternFieldDefinition} from '../definitions/field.definitions';
import {Input, OnInit} from '@angular/core';
import {AmbientModel} from '../definitions/form.definitions';
import {SafeHtml} from '@angular/platform-browser';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';
import {StyleHelperService} from '../helpers/style-helper.service';

export class GenericInputComponent implements OnInit {
  constructor(protected fieldProperties: FieldPropertiesConstants,
              protected styleHelper: StyleHelperService) {}

  component: PatternFieldDefinition;

  @Input()
  model: AmbientModel;

  isInError = false;
  svgId: string;
  fieldId: string;
  fieldName: string;
  colorProperty: FieldProperty;
  enabledProperty: FieldProperty;
  hintProperty: FieldProperty;
  visibleProperty: FieldProperty;
  fillWidth: number;
  fillHeight: number;
  patternDefinitions: SafeHtml;
  activeBorderPath: string;
  activeBorderDashArray: string;
  activeFillValue: string;
  inactiveBorderPath: string;
  inactiveBorderDashArray: string;
  inactiveFillValue: string;

  private _overridingInactiveFillColor: string = null;
  private inactiveFillColorProperty: FieldProperty;
  get inactiveFillColor() {
    return this._overridingInactiveFillColor || this.inactiveFillColorProperty.currentValue;
  }

  private _overridingActiveFillColor: string = null;
  private activeFillColorProperty: FieldProperty;
  get activeFillColor() {
    return this._overridingActiveFillColor || this.activeFillColorProperty.currentValue;
  }

  get isBold(): boolean {
    return (this.fontStyleValue & this.fieldProperties.flag_fontstyle_bold) === this.fieldProperties.flag_fontstyle_bold;
  }

  get isItalic(): boolean {
    return (this.fontStyleValue & this.fieldProperties.flag_fontstyle_italic) === this.fieldProperties.flag_fontstyle_italic;
  }

  private readonly _noDecoration: string = 'none';
  private _textDecorations: string = '';
  get textDecorations(): string {
    this._textDecorations = (this.fontStyleValue & this.fieldProperties.flag_fontstyle_underline) === this.fieldProperties.flag_fontstyle_underline ?
      'underline ' :
      '';
    this._textDecorations += (this.fontStyleValue & this.fieldProperties.flag_fontstyle_strikeout) === this.fieldProperties.flag_fontstyle_strikeout ?
      'line-through' :
      '';

    this._textDecorations = this._textDecorations.trim();
    return (this._textDecorations.length === 0) ? this._noDecoration : this._textDecorations;
  }

  ngOnInit(): void {
    let component = this.component,
      componentId = component.componentId,
      fieldProperties = this.model.properties[componentId],
      activeFillPatternId = 'patternActive' + componentId,
      activeFillStyle = (fieldProperties.activeBrushStyle || <any>{}).currentValue,
      activeFillColor = (fieldProperties.activeBrushColor || <any>{}).currentValue,
      activeFillSpecs = this.styleHelper.toFillSpecs(activeFillPatternId, activeFillStyle, activeFillColor, 'activeStyle'),
      inactiveFillPatternId = 'patternInactive' + componentId,
      inactiveFillStyle = (fieldProperties.brushStyle || <any>{}).currentValue,
      inactiveFillColor = (fieldProperties.brushColor || <any>{}).currentValue,
      inactiveFillSpecs = this.styleHelper.toFillSpecs(inactiveFillPatternId, inactiveFillStyle, inactiveFillColor, 'inactiveStyle');

    this.fieldId = 'field' + componentId;
    this.svgId = 'svg' + componentId;
    this.fieldName = 'input' + componentId;
    this.colorProperty = fieldProperties.fontColor;
    this.enabledProperty = fieldProperties.enabled;
    this.hintProperty = fieldProperties.hint;
    this.visibleProperty = fieldProperties.visible;
    this.activeFillColorProperty = fieldProperties.activeBrushColor;
    this.inactiveFillColorProperty = fieldProperties.brushColor;
    this._fontStyleProperty = fieldProperties.fontStyle;
    this.isInError = this.checkIsInError;

    this.fillWidth = component.width - ((component.borders.indexOf('r') >= 0 || component.inactiveBorders.indexOf('r') >= 0) ? 1 : 0);
    this.fillHeight = component.height - ((component.borders.indexOf('b') >= 0 || component.inactiveBorders.indexOf('b') >= 0) ? 1 : 0);
    this.activeBorderPath = !component.borders ? '' : this.styleHelper.toPath(component.borders, component.width, component.height, component.borderWidth);
    this.activeBorderDashArray = this.styleHelper.toDashArray(component.borderStyle);
    this.activeFillValue = activeFillSpecs.fillValue;
    this.inactiveBorderPath = !component.inactiveBorders ? '' : this.styleHelper.toPath(component.inactiveBorders, component.width, component.height, component.borderWidth);
    this.inactiveBorderDashArray = this.styleHelper.toDashArray(component.inactiveBorderStyle);
    this.inactiveFillValue = inactiveFillSpecs.fillValue;
    this.patternDefinitions = this.styleHelper.joinFillPatterns([activeFillSpecs, inactiveFillSpecs]);

    if (inactiveFillStyle === this.fieldProperties.id_brushstyle_clear)
      this._overridingInactiveFillColor = 'rgba(0,0,0,0)';
    if (activeFillStyle === this.fieldProperties.id_brushstyle_clear)
      this._overridingActiveFillColor = 'rgba(0,0,0,0)';
  }

  private _fontStyleProperty: FieldProperty;
  private get fontStyleValue(): number {
    if (!this._fontStyleProperty)
      return 0;

    return this._fontStyleProperty.currentValue;
  }

  protected get isRequiredAndMissing(): boolean {
    return this.model.isRequired(this.component.componentId) && !this.model.form.data[this.fieldName];
  }

  protected get checkIsInError(): boolean {
    return this.isValidationFailed || this.isRequiredAndMissing;
  }

  private isValidationFailed = false;
}
