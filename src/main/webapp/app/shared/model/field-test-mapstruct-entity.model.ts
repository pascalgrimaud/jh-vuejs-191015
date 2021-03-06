export const enum EnumFieldClass {
  ENUM_VALUE_1 = 'ENUM_VALUE_1',
  ENUM_VALUE_2 = 'ENUM_VALUE_2',
  ENUM_VALUE_3 = 'ENUM_VALUE_3'
}

export const enum EnumRequiredFieldClass {
  ENUM_VALUE_1 = 'ENUM_VALUE_1',
  ENUM_VALUE_2 = 'ENUM_VALUE_2',
  ENUM_VALUE_3 = 'ENUM_VALUE_3'
}

export interface IFieldTestMapstructEntity {
  id?: number;
  stringEva?: string;
  stringRequiredEva?: string;
  stringMinlengthEva?: string;
  stringMaxlengthEva?: string;
  stringPatternEva?: string;
  integerEva?: number;
  integerRequiredEva?: number;
  integerMinEva?: number;
  integerMaxEva?: number;
  longEva?: number;
  longRequiredEva?: number;
  longMinEva?: number;
  longMaxEva?: number;
  floatEva?: number;
  floatRequiredEva?: number;
  floatMinEva?: number;
  floatMaxEva?: number;
  doubleRequiredEva?: number;
  doubleMinEva?: number;
  doubleMaxEva?: number;
  bigDecimalRequiredEva?: number;
  bigDecimalMinEva?: number;
  bigDecimalMaxEva?: number;
  localDateEva?: Date;
  localDateRequiredEva?: Date;
  instantEva?: Date;
  instanteRequiredEva?: Date;
  zonedDateTimeEva?: Date;
  zonedDateTimeRequiredEva?: Date;
  durationEva?: number;
  durationRequiredEva?: number;
  booleanEva?: boolean;
  booleanRequiredEva?: boolean;
  enumEva?: EnumFieldClass;
  enumRequiredEva?: EnumRequiredFieldClass;
  uuidEva?: string;
  uuidRequiredEva?: string;
  byteImageEvaContentType?: string;
  byteImageEva?: any;
  byteImageRequiredEvaContentType?: string;
  byteImageRequiredEva?: any;
  byteImageMinbytesEvaContentType?: string;
  byteImageMinbytesEva?: any;
  byteImageMaxbytesEvaContentType?: string;
  byteImageMaxbytesEva?: any;
  byteAnyEvaContentType?: string;
  byteAnyEva?: any;
  byteAnyRequiredEvaContentType?: string;
  byteAnyRequiredEva?: any;
  byteAnyMinbytesEvaContentType?: string;
  byteAnyMinbytesEva?: any;
  byteAnyMaxbytesEvaContentType?: string;
  byteAnyMaxbytesEva?: any;
  byteTextEva?: any;
  byteTextRequiredEva?: any;
}

export class FieldTestMapstructEntity implements IFieldTestMapstructEntity {
  constructor(
    public id?: number,
    public stringEva?: string,
    public stringRequiredEva?: string,
    public stringMinlengthEva?: string,
    public stringMaxlengthEva?: string,
    public stringPatternEva?: string,
    public integerEva?: number,
    public integerRequiredEva?: number,
    public integerMinEva?: number,
    public integerMaxEva?: number,
    public longEva?: number,
    public longRequiredEva?: number,
    public longMinEva?: number,
    public longMaxEva?: number,
    public floatEva?: number,
    public floatRequiredEva?: number,
    public floatMinEva?: number,
    public floatMaxEva?: number,
    public doubleRequiredEva?: number,
    public doubleMinEva?: number,
    public doubleMaxEva?: number,
    public bigDecimalRequiredEva?: number,
    public bigDecimalMinEva?: number,
    public bigDecimalMaxEva?: number,
    public localDateEva?: Date,
    public localDateRequiredEva?: Date,
    public instantEva?: Date,
    public instanteRequiredEva?: Date,
    public zonedDateTimeEva?: Date,
    public zonedDateTimeRequiredEva?: Date,
    public durationEva?: number,
    public durationRequiredEva?: number,
    public booleanEva?: boolean,
    public booleanRequiredEva?: boolean,
    public enumEva?: EnumFieldClass,
    public enumRequiredEva?: EnumRequiredFieldClass,
    public uuidEva?: string,
    public uuidRequiredEva?: string,
    public byteImageEvaContentType?: string,
    public byteImageEva?: any,
    public byteImageRequiredEvaContentType?: string,
    public byteImageRequiredEva?: any,
    public byteImageMinbytesEvaContentType?: string,
    public byteImageMinbytesEva?: any,
    public byteImageMaxbytesEvaContentType?: string,
    public byteImageMaxbytesEva?: any,
    public byteAnyEvaContentType?: string,
    public byteAnyEva?: any,
    public byteAnyRequiredEvaContentType?: string,
    public byteAnyRequiredEva?: any,
    public byteAnyMinbytesEvaContentType?: string,
    public byteAnyMinbytesEva?: any,
    public byteAnyMaxbytesEvaContentType?: string,
    public byteAnyMaxbytesEva?: any,
    public byteTextEva?: any,
    public byteTextRequiredEva?: any
  ) {
    this.booleanEva = this.booleanEva || false;
    this.booleanRequiredEva = this.booleanRequiredEva || false;
  }
}
