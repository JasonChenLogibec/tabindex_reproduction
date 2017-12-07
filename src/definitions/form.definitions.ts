import {FieldProperties} from './field.definitions';

export type AmbientModel = {
  isRequired?: (id: string) => boolean;
  properties: FormProperties;
};

export type FormProperties = {
  [fieldId: string]: FieldProperties;
};
