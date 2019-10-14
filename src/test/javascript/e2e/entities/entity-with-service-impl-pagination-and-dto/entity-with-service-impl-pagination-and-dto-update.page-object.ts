import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class EntityWithServiceImplPaginationAndDTOUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.entityWithServiceImplPaginationAndDTO.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  theoInput: ElementFinder = element(by.css('input#entity-with-service-impl-pagination-and-dto-theo'));
}
