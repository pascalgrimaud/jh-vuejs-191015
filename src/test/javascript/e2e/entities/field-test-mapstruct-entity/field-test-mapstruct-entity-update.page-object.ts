import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class FieldTestMapstructEntityUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.fieldTestMapstructEntity.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  stringEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringEva'));

  stringRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringRequiredEva'));

  stringMinlengthEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringMinlengthEva'));

  stringMaxlengthEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringMaxlengthEva'));

  stringPatternEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringPatternEva'));

  integerEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerEva'));

  integerRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerRequiredEva'));

  integerMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerMinEva'));

  integerMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerMaxEva'));

  longEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longEva'));

  longRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longRequiredEva'));

  longMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longMinEva'));

  longMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longMaxEva'));

  floatEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatEva'));

  floatRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatRequiredEva'));

  floatMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatMinEva'));

  floatMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatMaxEva'));

  doubleRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-doubleRequiredEva'));

  doubleMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-doubleMinEva'));

  doubleMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-doubleMaxEva'));

  bigDecimalRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-bigDecimalRequiredEva'));

  bigDecimalMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-bigDecimalMinEva'));

  bigDecimalMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-bigDecimalMaxEva'));

  localDateEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-localDateEva'));

  localDateRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-localDateRequiredEva'));

  instantEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-instantEva'));

  instanteRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-instanteRequiredEva'));

  zonedDateTimeEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-zonedDateTimeEva'));

  zonedDateTimeRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-zonedDateTimeRequiredEva'));

  durationEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-durationEva'));

  durationRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-durationRequiredEva'));

  booleanEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-booleanEva'));

  booleanRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-booleanRequiredEva'));

  enumEvaSelect = element(by.css('select#field-test-mapstruct-entity-enumEva'));

  enumRequiredEvaSelect = element(by.css('select#field-test-mapstruct-entity-enumRequiredEva'));

  uuidEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-uuidEva'));

  uuidRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-uuidRequiredEva'));

  byteImageEvaInput: ElementFinder = element(by.css('input#file_byteImageEva'));

  byteImageRequiredEvaInput: ElementFinder = element(by.css('input#file_byteImageRequiredEva'));

  byteImageMinbytesEvaInput: ElementFinder = element(by.css('input#file_byteImageMinbytesEva'));

  byteImageMaxbytesEvaInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesEva'));

  byteAnyEvaInput: ElementFinder = element(by.css('input#file_byteAnyEva'));

  byteAnyRequiredEvaInput: ElementFinder = element(by.css('input#file_byteAnyRequiredEva'));

  byteAnyMinbytesEvaInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesEva'));

  byteAnyMaxbytesEvaInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesEva'));

  byteTextEvaInput: ElementFinder = element(by.css('textarea#field-test-mapstruct-entity-byteTextEva'));

  byteTextRequiredEvaInput: ElementFinder = element(by.css('textarea#field-test-mapstruct-entity-byteTextRequiredEva'));
}
