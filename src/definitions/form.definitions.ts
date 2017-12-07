import {FieldProperties} from './field.definitions';

export type AmbientModel = {
  isRequired: (id: string) => boolean;
  form: { data: any; };
  properties: FormProperties;
};

export type FormProperties = {
  [fieldId: string]: FieldProperties;
};
