import {SafeHtml} from '@angular/platform-browser';

export interface CommonDefinition {
  componentId: string;
  zIndex: number;
  top: number;
  left: number;
  width: number;
  height: number;
}

export type ShapeDefinition = CommonDefinition & {
  objectType: 'shape';
  borderColor: string;
  borderWidth: number;
  borderStyle?: number;
  fillColor: string;
  fillStyle: number;
  borderPath?: string;
  fillPath: string;
  isEllipse: boolean;
};

export type LineDefinition = CommonDefinition & {
  objectType: 'line';
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  lineWidth: number;
  lineStyle: number;
  lineColor: string;
};

export type ImageDefinition = CommonDefinition & {
  objectType: 'image';
};

export type DisplayTextDefinition = CommonDefinition & {
  objectType: 'displaytext';
  borders?: string;
  borderStyle?: number;
  borderWidth?: number;
  borderColor?: string;
  fillStyle: number;
  text?: string;
  fn?: string;
  prefix?: string;
  suffix?: string;
  wordWrap?: boolean;
  fontFamily?: string;
  fontSize: string;
  textAlign: string;
};

export type ButtonDefinition = CommonDefinition & {
  objectType: 'button';
  fontFamily?: string;
  fontStyle?: string;
  fontSize: string;
  text?: string;
  isTransparent?: boolean;
};

export type PatternFieldDefinition = CommonDefinition & {
  borders?: string;
  borderStyle?: number;
  borderWidth?: number;
  borderColor?: string;
  inactiveBorders?: string;
  inactiveBorderStyle?: number;
  inactiveBorderWidth?: number;
  inactiveBorderColor?: string;
  tabOrder: number;
};

export type GenericFieldDefinition = PatternFieldDefinition & {
  fontFamily?: string;
  fontSize: string;
  textAlign?: string;
  maxLength?: number;
  format?: string;
};

export type TextFieldDefinition = { objectType: 'text'; } & GenericFieldDefinition;

export type SpecialFieldDefinition = {
  objectType: 'special';
  editMask: string;
} & GenericFieldDefinition;

export type NumberFieldDefinition = {
  objectType: 'number';
  useSpinner: boolean;
} & GenericFieldDefinition;

export type DateFieldDefinition = CommonDefinition & {
  objectType: 'date';
  displayFormat: string;
  editFormat: string;
  placeholder: string;
} & GenericFieldDefinition;

export type TimeFieldDefinition = CommonDefinition & {
  objectType: 'time';
  displayFormat: string;
  editFormat: string;
  placeholder: string;
} & GenericFieldDefinition;

export type DateTimeFieldDefinition = {
  objectType: 'datetime';
  displayFormat: string;
  editFormat: string;
  placeholder: string;
} & GenericFieldDefinition;

export interface MemoLineDefinition {
  style: number; // Possible values listed in field-properties.constants.id_penstyle_[...].
  color: string;
  thickness: number;
}

export type MemoFieldDefinition = {
  objectType: 'memo';
  textHeight: string;
  activeLine?: MemoLineDefinition;
  inactiveLine?: MemoLineDefinition;
} & GenericFieldDefinition;

export type CheckboxDefinition = { objectType: 'checkbox'; } & PatternFieldDefinition;

export type RadioDefinition = {
  objectType: 'radio';
  isActiveCheckbox?: boolean;
  isInactiveCheckbox?: boolean;
} & PatternFieldDefinition;

export type DropDownListDefinition = {
  objectType: 'combobox';
  dataList: Array<any>;
} & GenericFieldDefinition;

export type ComboMixDefinition = {
  objectType: 'combomix';
  dataList: Array<any>;
} & GenericFieldDefinition;

export type StampFieldDefinition = {
  objectType: 'stamp';
} & GenericFieldDefinition;

export type SignatureFieldDefinition = {
  objectType: 'signature';
} & GenericFieldDefinition;

export type ObjectDefinition =
  ShapeDefinition |
  LineDefinition |
  ImageDefinition |
  DisplayTextDefinition |
  ButtonDefinition |
  TextFieldDefinition |
  SpecialFieldDefinition |
  NumberFieldDefinition |
  DateFieldDefinition |
  TimeFieldDefinition |
  DateTimeFieldDefinition |
  MemoFieldDefinition |
  CheckboxDefinition |
  RadioDefinition |
  DropDownListDefinition |
  ComboMixDefinition |
  StampFieldDefinition |
  SignatureFieldDefinition;

export interface ComponentFillSpecs {
  fillValue: string;
  fillPattern: SafeHtml;
}

export type FieldProperties = {
  [propertyName: string]: FieldProperty;
};

export type FieldProperty = { currentValue: any };
