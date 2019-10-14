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

export interface IFieldTestServiceClassEntity {
  id?: number;
  stringBob?: string;
  stringRequiredBob?: string;
  stringMinlengthBob?: string;
  stringMaxlengthBob?: string;
  stringPatternBob?: string;
  integerBob?: number;
  integerRequiredBob?: number;
  integerMinBob?: number;
  integerMaxBob?: number;
  longBob?: number;
  longRequiredBob?: number;
  longMinBob?: number;
  longMaxBob?: number;
  floatBob?: number;
  floatRequiredBob?: number;
  floatMinBob?: number;
  floatMaxBob?: number;
  doubleRequiredBob?: number;
  doubleMinBob?: number;
  doubleMaxBob?: number;
  bigDecimalRequiredBob?: number;
  bigDecimalMinBob?: number;
  bigDecimalMaxBob?: number;
  localDateBob?: Date;
  localDateRequiredBob?: Date;
  instantBob?: Date;
  instanteRequiredBob?: Date;
  zonedDateTimeBob?: Date;
  zonedDateTimeRequiredBob?: Date;
  durationBob?: number;
  durationRequiredBob?: number;
  booleanBob?: boolean;
  booleanRequiredBob?: boolean;
  enumBob?: EnumFieldClass;
  enumRequiredBob?: EnumRequiredFieldClass;
  uuidBob?: string;
  uuidRequiredBob?: string;
  byteImageBobContentType?: string;
  byteImageBob?: any;
  byteImageRequiredBobContentType?: string;
  byteImageRequiredBob?: any;
  byteImageMinbytesBobContentType?: string;
  byteImageMinbytesBob?: any;
  byteImageMaxbytesBobContentType?: string;
  byteImageMaxbytesBob?: any;
  byteAnyBobContentType?: string;
  byteAnyBob?: any;
  byteAnyRequiredBobContentType?: string;
  byteAnyRequiredBob?: any;
  byteAnyMinbytesBobContentType?: string;
  byteAnyMinbytesBob?: any;
  byteAnyMaxbytesBobContentType?: string;
  byteAnyMaxbytesBob?: any;
  byteTextBob?: any;
  byteTextRequiredBob?: any;
}

export class FieldTestServiceClassEntity implements IFieldTestServiceClassEntity {
  constructor(
    public id?: number,
    public stringBob?: string,
    public stringRequiredBob?: string,
    public stringMinlengthBob?: string,
    public stringMaxlengthBob?: string,
    public stringPatternBob?: string,
    public integerBob?: number,
    public integerRequiredBob?: number,
    public integerMinBob?: number,
    public integerMaxBob?: number,
    public longBob?: number,
    public longRequiredBob?: number,
    public longMinBob?: number,
    public longMaxBob?: number,
    public floatBob?: number,
    public floatRequiredBob?: number,
    public floatMinBob?: number,
    public floatMaxBob?: number,
    public doubleRequiredBob?: number,
    public doubleMinBob?: number,
    public doubleMaxBob?: number,
    public bigDecimalRequiredBob?: number,
    public bigDecimalMinBob?: number,
    public bigDecimalMaxBob?: number,
    public localDateBob?: Date,
    public localDateRequiredBob?: Date,
    public instantBob?: Date,
    public instanteRequiredBob?: Date,
    public zonedDateTimeBob?: Date,
    public zonedDateTimeRequiredBob?: Date,
    public durationBob?: number,
    public durationRequiredBob?: number,
    public booleanBob?: boolean,
    public booleanRequiredBob?: boolean,
    public enumBob?: EnumFieldClass,
    public enumRequiredBob?: EnumRequiredFieldClass,
    public uuidBob?: string,
    public uuidRequiredBob?: string,
    public byteImageBobContentType?: string,
    public byteImageBob?: any,
    public byteImageRequiredBobContentType?: string,
    public byteImageRequiredBob?: any,
    public byteImageMinbytesBobContentType?: string,
    public byteImageMinbytesBob?: any,
    public byteImageMaxbytesBobContentType?: string,
    public byteImageMaxbytesBob?: any,
    public byteAnyBobContentType?: string,
    public byteAnyBob?: any,
    public byteAnyRequiredBobContentType?: string,
    public byteAnyRequiredBob?: any,
    public byteAnyMinbytesBobContentType?: string,
    public byteAnyMinbytesBob?: any,
    public byteAnyMaxbytesBobContentType?: string,
    public byteAnyMaxbytesBob?: any,
    public byteTextBob?: any,
    public byteTextRequiredBob?: any
  ) {
    this.booleanBob = this.booleanBob || false;
    this.booleanRequiredBob = this.booleanRequiredBob || false;
  }
}
