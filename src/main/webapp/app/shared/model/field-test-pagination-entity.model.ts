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

export interface IFieldTestPaginationEntity {
  id?: number;
  stringAlice?: string;
  stringRequiredAlice?: string;
  stringMinlengthAlice?: string;
  stringMaxlengthAlice?: string;
  stringPatternAlice?: string;
  integerAlice?: number;
  integerRequiredAlice?: number;
  integerMinAlice?: number;
  integerMaxAlice?: number;
  longAlice?: number;
  longRequiredAlice?: number;
  longMinAlice?: number;
  longMaxAlice?: number;
  floatAlice?: number;
  floatRequiredAlice?: number;
  floatMinAlice?: number;
  floatMaxAlice?: number;
  doubleRequiredAlice?: number;
  doubleMinAlice?: number;
  doubleMaxAlice?: number;
  bigDecimalRequiredAlice?: number;
  bigDecimalMinAlice?: number;
  bigDecimalMaxAlice?: number;
  localDateAlice?: Date;
  localDateRequiredAlice?: Date;
  instantAlice?: Date;
  instanteRequiredAlice?: Date;
  zonedDateTimeAlice?: Date;
  zonedDateTimeRequiredAlice?: Date;
  durationAlice?: number;
  durationRequiredAlice?: number;
  booleanAlice?: boolean;
  booleanRequiredAlice?: boolean;
  enumAlice?: EnumFieldClass;
  enumRequiredAlice?: EnumRequiredFieldClass;
  uuidAlice?: string;
  uuidRequiredAlice?: string;
  byteImageAliceContentType?: string;
  byteImageAlice?: any;
  byteImageRequiredAliceContentType?: string;
  byteImageRequiredAlice?: any;
  byteImageMinbytesAliceContentType?: string;
  byteImageMinbytesAlice?: any;
  byteImageMaxbytesAliceContentType?: string;
  byteImageMaxbytesAlice?: any;
  byteAnyAliceContentType?: string;
  byteAnyAlice?: any;
  byteAnyRequiredAliceContentType?: string;
  byteAnyRequiredAlice?: any;
  byteAnyMinbytesAliceContentType?: string;
  byteAnyMinbytesAlice?: any;
  byteAnyMaxbytesAliceContentType?: string;
  byteAnyMaxbytesAlice?: any;
  byteTextAlice?: any;
  byteTextRequiredAlice?: any;
}

export class FieldTestPaginationEntity implements IFieldTestPaginationEntity {
  constructor(
    public id?: number,
    public stringAlice?: string,
    public stringRequiredAlice?: string,
    public stringMinlengthAlice?: string,
    public stringMaxlengthAlice?: string,
    public stringPatternAlice?: string,
    public integerAlice?: number,
    public integerRequiredAlice?: number,
    public integerMinAlice?: number,
    public integerMaxAlice?: number,
    public longAlice?: number,
    public longRequiredAlice?: number,
    public longMinAlice?: number,
    public longMaxAlice?: number,
    public floatAlice?: number,
    public floatRequiredAlice?: number,
    public floatMinAlice?: number,
    public floatMaxAlice?: number,
    public doubleRequiredAlice?: number,
    public doubleMinAlice?: number,
    public doubleMaxAlice?: number,
    public bigDecimalRequiredAlice?: number,
    public bigDecimalMinAlice?: number,
    public bigDecimalMaxAlice?: number,
    public localDateAlice?: Date,
    public localDateRequiredAlice?: Date,
    public instantAlice?: Date,
    public instanteRequiredAlice?: Date,
    public zonedDateTimeAlice?: Date,
    public zonedDateTimeRequiredAlice?: Date,
    public durationAlice?: number,
    public durationRequiredAlice?: number,
    public booleanAlice?: boolean,
    public booleanRequiredAlice?: boolean,
    public enumAlice?: EnumFieldClass,
    public enumRequiredAlice?: EnumRequiredFieldClass,
    public uuidAlice?: string,
    public uuidRequiredAlice?: string,
    public byteImageAliceContentType?: string,
    public byteImageAlice?: any,
    public byteImageRequiredAliceContentType?: string,
    public byteImageRequiredAlice?: any,
    public byteImageMinbytesAliceContentType?: string,
    public byteImageMinbytesAlice?: any,
    public byteImageMaxbytesAliceContentType?: string,
    public byteImageMaxbytesAlice?: any,
    public byteAnyAliceContentType?: string,
    public byteAnyAlice?: any,
    public byteAnyRequiredAliceContentType?: string,
    public byteAnyRequiredAlice?: any,
    public byteAnyMinbytesAliceContentType?: string,
    public byteAnyMinbytesAlice?: any,
    public byteAnyMaxbytesAliceContentType?: string,
    public byteAnyMaxbytesAlice?: any,
    public byteTextAlice?: any,
    public byteTextRequiredAlice?: any
  ) {
    this.booleanAlice = this.booleanAlice || false;
    this.booleanRequiredAlice = this.booleanRequiredAlice || false;
  }
}
