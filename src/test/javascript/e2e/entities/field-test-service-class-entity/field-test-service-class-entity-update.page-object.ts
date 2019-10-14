import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class FieldTestServiceClassEntityUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.fieldTestServiceClassEntity.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  stringBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringBob'));

  stringRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringRequiredBob'));

  stringMinlengthBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringMinlengthBob'));

  stringMaxlengthBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringMaxlengthBob'));

  stringPatternBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringPatternBob'));

  integerBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerBob'));

  integerRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerRequiredBob'));

  integerMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerMinBob'));

  integerMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerMaxBob'));

  longBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longBob'));

  longRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longRequiredBob'));

  longMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longMinBob'));

  longMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longMaxBob'));

  floatBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatBob'));

  floatRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatRequiredBob'));

  floatMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatMinBob'));

  floatMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatMaxBob'));

  doubleRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-doubleRequiredBob'));

  doubleMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-doubleMinBob'));

  doubleMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-doubleMaxBob'));

  bigDecimalRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-bigDecimalRequiredBob'));

  bigDecimalMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-bigDecimalMinBob'));

  bigDecimalMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-bigDecimalMaxBob'));

  localDateBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-localDateBob'));

  localDateRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-localDateRequiredBob'));

  instantBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-instantBob'));

  instanteRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-instanteRequiredBob'));

  zonedDateTimeBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-zonedDateTimeBob'));

  zonedDateTimeRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-zonedDateTimeRequiredBob'));

  durationBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-durationBob'));

  durationRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-durationRequiredBob'));

  booleanBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-booleanBob'));

  booleanRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-booleanRequiredBob'));

  enumBobSelect = element(by.css('select#field-test-service-class-entity-enumBob'));

  enumRequiredBobSelect = element(by.css('select#field-test-service-class-entity-enumRequiredBob'));

  uuidBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-uuidBob'));

  uuidRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-uuidRequiredBob'));

  byteImageBobInput: ElementFinder = element(by.css('input#file_byteImageBob'));

  byteImageRequiredBobInput: ElementFinder = element(by.css('input#file_byteImageRequiredBob'));

  byteImageMinbytesBobInput: ElementFinder = element(by.css('input#file_byteImageMinbytesBob'));

  byteImageMaxbytesBobInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesBob'));

  byteAnyBobInput: ElementFinder = element(by.css('input#file_byteAnyBob'));

  byteAnyRequiredBobInput: ElementFinder = element(by.css('input#file_byteAnyRequiredBob'));

  byteAnyMinbytesBobInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesBob'));

  byteAnyMaxbytesBobInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesBob'));

  byteTextBobInput: ElementFinder = element(by.css('textarea#field-test-service-class-entity-byteTextBob'));

  byteTextRequiredBobInput: ElementFinder = element(by.css('textarea#field-test-service-class-entity-byteTextRequiredBob'));
}
