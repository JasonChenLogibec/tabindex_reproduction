import {Component, Input} from '@angular/core';
import {AmbientModel} from '../definitions/form.definitions';
import {ButtonDefinition, FieldProperty} from '../definitions/field.definitions';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';

@Component({
  selector: 'form-button',
  styleUrls: [],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  constructor(private sanitizer: DomSanitizer,
              private documentProperties: FieldPropertiesConstants) {}

  @Input()
  model: AmbientModel;

  @Input()
  component: ButtonDefinition;

  public isVisible: FieldProperty;
  public isEnabled: FieldProperty;
  public fontColor: FieldProperty;
  public text: SafeHtml;

  private _fontStyleProperty: FieldProperty;
  private get fontStyleValue(): number {
    if (!this._fontStyleProperty)
      return 0;

    return <number>this._fontStyleProperty.currentValue;
  }

  public get isBold(): boolean {
    return (this.fontStyleValue & this.documentProperties.flag_fontstyle_bold) === this.documentProperties.flag_fontstyle_bold;
  }
  public get isItalic(): boolean {
    return (this.fontStyleValue & this.documentProperties.flag_fontstyle_italic) === this.documentProperties.flag_fontstyle_italic;
  }

  private readonly _noDecorations: Array<string> = ['none'];
  private _textDecorations: Array<string> = [];
  public get textDecorations(): Array<string> {
    let hasUnderline, hasStrikeOut;
    this._textDecorations[0] = (hasUnderline = (this.fontStyleValue & this.documentProperties.flag_fontstyle_underline) === this.documentProperties.flag_fontstyle_underline) ?
      'underline' :
      '';
    this._textDecorations[1] = (hasStrikeOut = (this.fontStyleValue & this.documentProperties.flag_fontstyle_strikeout) === this.documentProperties.flag_fontstyle_strikeout) ?
      'line-through' :
      '';
    return hasUnderline || hasStrikeOut ? this._textDecorations : this._noDecorations;
  }

  ngOnInit(): void {
    this.text = this.sanitizer.bypassSecurityTrustHtml(this.component.text || '');
    this.component.fontFamily = '"' + this.component.fontFamily + '"';

    let fieldProperties = this.model.properties[this.component.componentId];
    this.isVisible = fieldProperties.visible;
    this.isEnabled = fieldProperties.enabled;
    this.fontColor = fieldProperties.fontColor;
    this._fontStyleProperty = fieldProperties.fontStyle;
  }
}
