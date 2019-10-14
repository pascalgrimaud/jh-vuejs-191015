import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class FieldTestServiceImplEntityUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.fieldTestServiceImplEntity.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  stringMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringMika'));

  stringRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringRequiredMika'));

  stringMinlengthMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringMinlengthMika'));

  stringMaxlengthMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringMaxlengthMika'));

  stringPatternMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringPatternMika'));

  integerMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerMika'));

  integerRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerRequiredMika'));

  integerMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerMinMika'));

  integerMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerMaxMika'));

  longMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longMika'));

  longRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longRequiredMika'));

  longMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longMinMika'));

  longMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longMaxMika'));

  floatMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatMika'));

  floatRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatRequiredMika'));

  floatMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatMinMika'));

  floatMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatMaxMika'));

  doubleRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-doubleRequiredMika'));

  doubleMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-doubleMinMika'));

  doubleMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-doubleMaxMika'));

  bigDecimalRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-bigDecimalRequiredMika'));

  bigDecimalMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-bigDecimalMinMika'));

  bigDecimalMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-bigDecimalMaxMika'));

  localDateMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-localDateMika'));

  localDateRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-localDateRequiredMika'));

  instantMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-instantMika'));

  instanteRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-instanteRequiredMika'));

  zonedDateTimeMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-zonedDateTimeMika'));

  zonedDateTimeRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-zonedDateTimeRequiredMika'));

  durationMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-durationMika'));

  durationRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-durationRequiredMika'));

  booleanMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-booleanMika'));

  booleanRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-booleanRequiredMika'));

  enumMikaSelect = element(by.css('select#field-test-service-impl-entity-enumMika'));

  enumRequiredMikaSelect = element(by.css('select#field-test-service-impl-entity-enumRequiredMika'));

  uuidMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-uuidMika'));

  uuidRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-uuidRequiredMika'));

  byteImageMikaInput: ElementFinder = element(by.css('input#file_byteImageMika'));

  byteImageRequiredMikaInput: ElementFinder = element(by.css('input#file_byteImageRequiredMika'));

  byteImageMinbytesMikaInput: ElementFinder = element(by.css('input#file_byteImageMinbytesMika'));

  byteImageMaxbytesMikaInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesMika'));

  byteAnyMikaInput: ElementFinder = element(by.css('input#file_byteAnyMika'));

  byteAnyRequiredMikaInput: ElementFinder = element(by.css('input#file_byteAnyRequiredMika'));

  byteAnyMinbytesMikaInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesMika'));

  byteAnyMaxbytesMikaInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesMika'));

  byteTextMikaInput: ElementFinder = element(by.css('textarea#field-test-service-impl-entity-byteTextMika'));

  byteTextRequiredMikaInput: ElementFinder = element(by.css('textarea#field-test-service-impl-entity-byteTextRequiredMika'));
}
