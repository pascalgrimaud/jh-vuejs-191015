import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class FieldTestEntityUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.fieldTestEntity.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  stringTomInput: ElementFinder = element(by.css('input#field-test-entity-stringTom'));

  stringRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-stringRequiredTom'));

  stringMinlengthTomInput: ElementFinder = element(by.css('input#field-test-entity-stringMinlengthTom'));

  stringMaxlengthTomInput: ElementFinder = element(by.css('input#field-test-entity-stringMaxlengthTom'));

  stringPatternTomInput: ElementFinder = element(by.css('input#field-test-entity-stringPatternTom'));

  integerTomInput: ElementFinder = element(by.css('input#field-test-entity-integerTom'));

  integerRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-integerRequiredTom'));

  integerMinTomInput: ElementFinder = element(by.css('input#field-test-entity-integerMinTom'));

  integerMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-integerMaxTom'));

  longTomInput: ElementFinder = element(by.css('input#field-test-entity-longTom'));

  longRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-longRequiredTom'));

  longMinTomInput: ElementFinder = element(by.css('input#field-test-entity-longMinTom'));

  longMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-longMaxTom'));

  floatTomInput: ElementFinder = element(by.css('input#field-test-entity-floatTom'));

  floatRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-floatRequiredTom'));

  floatMinTomInput: ElementFinder = element(by.css('input#field-test-entity-floatMinTom'));

  floatMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-floatMaxTom'));

  doubleRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-doubleRequiredTom'));

  doubleMinTomInput: ElementFinder = element(by.css('input#field-test-entity-doubleMinTom'));

  doubleMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-doubleMaxTom'));

  bigDecimalRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-bigDecimalRequiredTom'));

  bigDecimalMinTomInput: ElementFinder = element(by.css('input#field-test-entity-bigDecimalMinTom'));

  bigDecimalMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-bigDecimalMaxTom'));

  localDateTomInput: ElementFinder = element(by.css('input#field-test-entity-localDateTom'));

  localDateRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-localDateRequiredTom'));

  instantTomInput: ElementFinder = element(by.css('input#field-test-entity-instantTom'));

  instantRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-instantRequiredTom'));

  zonedDateTimeTomInput: ElementFinder = element(by.css('input#field-test-entity-zonedDateTimeTom'));

  zonedDateTimeRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-zonedDateTimeRequiredTom'));

  durationTomInput: ElementFinder = element(by.css('input#field-test-entity-durationTom'));

  durationRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-durationRequiredTom'));

  booleanTomInput: ElementFinder = element(by.css('input#field-test-entity-booleanTom'));

  booleanRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-booleanRequiredTom'));

  enumTomSelect = element(by.css('select#field-test-entity-enumTom'));

  enumRequiredTomSelect = element(by.css('select#field-test-entity-enumRequiredTom'));

  uuidTomInput: ElementFinder = element(by.css('input#field-test-entity-uuidTom'));

  uuidRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-uuidRequiredTom'));

  byteImageTomInput: ElementFinder = element(by.css('input#file_byteImageTom'));

  byteImageRequiredTomInput: ElementFinder = element(by.css('input#file_byteImageRequiredTom'));

  byteImageMinbytesTomInput: ElementFinder = element(by.css('input#file_byteImageMinbytesTom'));

  byteImageMaxbytesTomInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesTom'));

  byteAnyTomInput: ElementFinder = element(by.css('input#file_byteAnyTom'));

  byteAnyRequiredTomInput: ElementFinder = element(by.css('input#file_byteAnyRequiredTom'));

  byteAnyMinbytesTomInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesTom'));

  byteAnyMaxbytesTomInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesTom'));

  byteTextTomInput: ElementFinder = element(by.css('textarea#field-test-entity-byteTextTom'));

  byteTextRequiredTomInput: ElementFinder = element(by.css('textarea#field-test-entity-byteTextRequiredTom'));
}
