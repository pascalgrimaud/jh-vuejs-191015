import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class FieldTestPaginationEntityUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.fieldTestPaginationEntity.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  stringAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringAlice'));

  stringRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringRequiredAlice'));

  stringMinlengthAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringMinlengthAlice'));

  stringMaxlengthAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringMaxlengthAlice'));

  stringPatternAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringPatternAlice'));

  integerAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerAlice'));

  integerRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerRequiredAlice'));

  integerMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerMinAlice'));

  integerMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerMaxAlice'));

  longAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longAlice'));

  longRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longRequiredAlice'));

  longMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longMinAlice'));

  longMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longMaxAlice'));

  floatAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatAlice'));

  floatRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatRequiredAlice'));

  floatMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatMinAlice'));

  floatMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatMaxAlice'));

  doubleRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-doubleRequiredAlice'));

  doubleMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-doubleMinAlice'));

  doubleMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-doubleMaxAlice'));

  bigDecimalRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-bigDecimalRequiredAlice'));

  bigDecimalMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-bigDecimalMinAlice'));

  bigDecimalMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-bigDecimalMaxAlice'));

  localDateAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-localDateAlice'));

  localDateRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-localDateRequiredAlice'));

  instantAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-instantAlice'));

  instanteRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-instanteRequiredAlice'));

  zonedDateTimeAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-zonedDateTimeAlice'));

  zonedDateTimeRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-zonedDateTimeRequiredAlice'));

  durationAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-durationAlice'));

  durationRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-durationRequiredAlice'));

  booleanAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-booleanAlice'));

  booleanRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-booleanRequiredAlice'));

  enumAliceSelect = element(by.css('select#field-test-pagination-entity-enumAlice'));

  enumRequiredAliceSelect = element(by.css('select#field-test-pagination-entity-enumRequiredAlice'));

  uuidAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-uuidAlice'));

  uuidRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-uuidRequiredAlice'));

  byteImageAliceInput: ElementFinder = element(by.css('input#file_byteImageAlice'));

  byteImageRequiredAliceInput: ElementFinder = element(by.css('input#file_byteImageRequiredAlice'));

  byteImageMinbytesAliceInput: ElementFinder = element(by.css('input#file_byteImageMinbytesAlice'));

  byteImageMaxbytesAliceInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesAlice'));

  byteAnyAliceInput: ElementFinder = element(by.css('input#file_byteAnyAlice'));

  byteAnyRequiredAliceInput: ElementFinder = element(by.css('input#file_byteAnyRequiredAlice'));

  byteAnyMinbytesAliceInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesAlice'));

  byteAnyMaxbytesAliceInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesAlice'));

  byteTextAliceInput: ElementFinder = element(by.css('textarea#field-test-pagination-entity-byteTextAlice'));

  byteTextRequiredAliceInput: ElementFinder = element(by.css('textarea#field-test-pagination-entity-byteTextRequiredAlice'));
}
