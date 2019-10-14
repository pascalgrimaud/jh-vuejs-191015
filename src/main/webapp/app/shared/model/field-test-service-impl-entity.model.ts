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

export interface IFieldTestServiceImplEntity {
  id?: number;
  stringMika?: string;
  stringRequiredMika?: string;
  stringMinlengthMika?: string;
  stringMaxlengthMika?: string;
  stringPatternMika?: string;
  integerMika?: number;
  integerRequiredMika?: number;
  integerMinMika?: number;
  integerMaxMika?: number;
  longMika?: number;
  longRequiredMika?: number;
  longMinMika?: number;
  longMaxMika?: number;
  floatMika?: number;
  floatRequiredMika?: number;
  floatMinMika?: number;
  floatMaxMika?: number;
  doubleRequiredMika?: number;
  doubleMinMika?: number;
  doubleMaxMika?: number;
  bigDecimalRequiredMika?: number;
  bigDecimalMinMika?: number;
  bigDecimalMaxMika?: number;
  localDateMika?: Date;
  localDateRequiredMika?: Date;
  instantMika?: Date;
  instanteRequiredMika?: Date;
  zonedDateTimeMika?: Date;
  zonedDateTimeRequiredMika?: Date;
  durationMika?: number;
  durationRequiredMika?: number;
  booleanMika?: boolean;
  booleanRequiredMika?: boolean;
  enumMika?: EnumFieldClass;
  enumRequiredMika?: EnumRequiredFieldClass;
  uuidMika?: string;
  uuidRequiredMika?: string;
  byteImageMikaContentType?: string;
  byteImageMika?: any;
  byteImageRequiredMikaContentType?: string;
  byteImageRequiredMika?: any;
  byteImageMinbytesMikaContentType?: string;
  byteImageMinbytesMika?: any;
  byteImageMaxbytesMikaContentType?: string;
  byteImageMaxbytesMika?: any;
  byteAnyMikaContentType?: string;
  byteAnyMika?: any;
  byteAnyRequiredMikaContentType?: string;
  byteAnyRequiredMika?: any;
  byteAnyMinbytesMikaContentType?: string;
  byteAnyMinbytesMika?: any;
  byteAnyMaxbytesMikaContentType?: string;
  byteAnyMaxbytesMika?: any;
  byteTextMika?: any;
  byteTextRequiredMika?: any;
}

export class FieldTestServiceImplEntity implements IFieldTestServiceImplEntity {
  constructor(
    public id?: number,
    public stringMika?: string,
    public stringRequiredMika?: string,
    public stringMinlengthMika?: string,
    public stringMaxlengthMika?: string,
    public stringPatternMika?: string,
    public integerMika?: number,
    public integerRequiredMika?: number,
    public integerMinMika?: number,
    public integerMaxMika?: number,
    public longMika?: number,
    public longRequiredMika?: number,
    public longMinMika?: number,
    public longMaxMika?: number,
    public floatMika?: number,
    public floatRequiredMika?: number,
    public floatMinMika?: number,
    public floatMaxMika?: number,
    public doubleRequiredMika?: number,
    public doubleMinMika?: number,
    public doubleMaxMika?: number,
    public bigDecimalRequiredMika?: number,
    public bigDecimalMinMika?: number,
    public bigDecimalMaxMika?: number,
    public localDateMika?: Date,
    public localDateRequiredMika?: Date,
    public instantMika?: Date,
    public instanteRequiredMika?: Date,
    public zonedDateTimeMika?: Date,
    public zonedDateTimeRequiredMika?: Date,
    public durationMika?: number,
    public durationRequiredMika?: number,
    public booleanMika?: boolean,
    public booleanRequiredMika?: boolean,
    public enumMika?: EnumFieldClass,
    public enumRequiredMika?: EnumRequiredFieldClass,
    public uuidMika?: string,
    public uuidRequiredMika?: string,
    public byteImageMikaContentType?: string,
    public byteImageMika?: any,
    public byteImageRequiredMikaContentType?: string,
    public byteImageRequiredMika?: any,
    public byteImageMinbytesMikaContentType?: string,
    public byteImageMinbytesMika?: any,
    public byteImageMaxbytesMikaContentType?: string,
    public byteImageMaxbytesMika?: any,
    public byteAnyMikaContentType?: string,
    public byteAnyMika?: any,
    public byteAnyRequiredMikaContentType?: string,
    public byteAnyRequiredMika?: any,
    public byteAnyMinbytesMikaContentType?: string,
    public byteAnyMinbytesMika?: any,
    public byteAnyMaxbytesMikaContentType?: string,
    public byteAnyMaxbytesMika?: any,
    public byteTextMika?: any,
    public byteTextRequiredMika?: any
  ) {
    this.booleanMika = this.booleanMika || false;
    this.booleanRequiredMika = this.booleanRequiredMika || false;
  }
}
