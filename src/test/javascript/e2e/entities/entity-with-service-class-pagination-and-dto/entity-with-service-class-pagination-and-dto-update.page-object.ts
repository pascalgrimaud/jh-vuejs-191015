import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class EntityWithServiceClassPaginationAndDTOUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.entityWithServiceClassPaginationAndDTO.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  lenaInput: ElementFinder = element(by.css('input#entity-with-service-class-pagination-and-dto-lena'));
}
