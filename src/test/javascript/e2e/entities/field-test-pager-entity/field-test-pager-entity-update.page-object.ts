import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class FieldTestPagerEntityUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.fieldTestPagerEntity.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  stringJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringJade'));

  stringRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringRequiredJade'));

  stringMinlengthJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringMinlengthJade'));

  stringMaxlengthJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringMaxlengthJade'));

  stringPatternJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringPatternJade'));

  integerJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerJade'));

  integerRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerRequiredJade'));

  integerMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerMinJade'));

  integerMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerMaxJade'));

  longJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longJade'));

  longRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longRequiredJade'));

  longMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longMinJade'));

  longMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longMaxJade'));

  floatJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatJade'));

  floatRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatRequiredJade'));

  floatMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatMinJade'));

  floatMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatMaxJade'));

  doubleRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-doubleRequiredJade'));

  doubleMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-doubleMinJade'));

  doubleMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-doubleMaxJade'));

  bigDecimalRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-bigDecimalRequiredJade'));

  bigDecimalMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-bigDecimalMinJade'));

  bigDecimalMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-bigDecimalMaxJade'));

  localDateJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-localDateJade'));

  localDateRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-localDateRequiredJade'));

  instantJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-instantJade'));

  instanteRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-instanteRequiredJade'));

  zonedDateTimeJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-zonedDateTimeJade'));

  zonedDateTimeRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-zonedDateTimeRequiredJade'));

  durationJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-durationJade'));

  durationRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-durationRequiredJade'));

  booleanJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-booleanJade'));

  booleanRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-booleanRequiredJade'));

  enumJadeSelect = element(by.css('select#field-test-pager-entity-enumJade'));

  enumRequiredJadeSelect = element(by.css('select#field-test-pager-entity-enumRequiredJade'));

  uuidJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-uuidJade'));

  uuidRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-uuidRequiredJade'));

  byteImageJadeInput: ElementFinder = element(by.css('input#file_byteImageJade'));

  byteImageRequiredJadeInput: ElementFinder = element(by.css('input#file_byteImageRequiredJade'));

  byteImageMinbytesJadeInput: ElementFinder = element(by.css('input#file_byteImageMinbytesJade'));

  byteImageMaxbytesJadeInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesJade'));

  byteAnyJadeInput: ElementFinder = element(by.css('input#file_byteAnyJade'));

  byteAnyRequiredJadeInput: ElementFinder = element(by.css('input#file_byteAnyRequiredJade'));

  byteAnyMinbytesJadeInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesJade'));

  byteAnyMaxbytesJadeInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesJade'));

  byteTextJadeInput: ElementFinder = element(by.css('textarea#field-test-pager-entity-byteTextJade'));

  byteTextRequiredJadeInput: ElementFinder = element(by.css('textarea#field-test-pager-entity-byteTextRequiredJade'));
}
