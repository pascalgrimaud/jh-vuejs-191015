import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class FieldTestInfiniteScrollEntityUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.fieldTestInfiniteScrollEntity.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  stringHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringHugo'));

  stringRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringRequiredHugo'));

  stringMinlengthHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringMinlengthHugo'));

  stringMaxlengthHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringMaxlengthHugo'));

  stringPatternHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringPatternHugo'));

  integerHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerHugo'));

  integerRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerRequiredHugo'));

  integerMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerMinHugo'));

  integerMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerMaxHugo'));

  longHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longHugo'));

  longRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longRequiredHugo'));

  longMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longMinHugo'));

  longMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longMaxHugo'));

  floatHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatHugo'));

  floatRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatRequiredHugo'));

  floatMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatMinHugo'));

  floatMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatMaxHugo'));

  doubleRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-doubleRequiredHugo'));

  doubleMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-doubleMinHugo'));

  doubleMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-doubleMaxHugo'));

  bigDecimalRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-bigDecimalRequiredHugo'));

  bigDecimalMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-bigDecimalMinHugo'));

  bigDecimalMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-bigDecimalMaxHugo'));

  localDateHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-localDateHugo'));

  localDateRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-localDateRequiredHugo'));

  instantHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-instantHugo'));

  instanteRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-instanteRequiredHugo'));

  zonedDateTimeHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-zonedDateTimeHugo'));

  zonedDateTimeRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-zonedDateTimeRequiredHugo'));

  durationHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-durationHugo'));

  durationRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-durationRequiredHugo'));

  booleanHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-booleanHugo'));

  booleanRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-booleanRequiredHugo'));

  enumHugoSelect = element(by.css('select#field-test-infinite-scroll-entity-enumHugo'));

  enumRequiredHugoSelect = element(by.css('select#field-test-infinite-scroll-entity-enumRequiredHugo'));

  uuidHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-uuidHugo'));

  uuidRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-uuidRequiredHugo'));

  byteImageHugoInput: ElementFinder = element(by.css('input#file_byteImageHugo'));

  byteImageRequiredHugoInput: ElementFinder = element(by.css('input#file_byteImageRequiredHugo'));

  byteImageMinbytesHugoInput: ElementFinder = element(by.css('input#file_byteImageMinbytesHugo'));

  byteImageMaxbytesHugoInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesHugo'));

  byteAnyHugoInput: ElementFinder = element(by.css('input#file_byteAnyHugo'));

  byteAnyRequiredHugoInput: ElementFinder = element(by.css('input#file_byteAnyRequiredHugo'));

  byteAnyMinbytesHugoInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesHugo'));

  byteAnyMaxbytesHugoInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesHugo'));

  byteTextHugoInput: ElementFinder = element(by.css('textarea#field-test-infinite-scroll-entity-byteTextHugo'));

  byteTextRequiredHugoInput: ElementFinder = element(by.css('textarea#field-test-infinite-scroll-entity-byteTextRequiredHugo'));
}
