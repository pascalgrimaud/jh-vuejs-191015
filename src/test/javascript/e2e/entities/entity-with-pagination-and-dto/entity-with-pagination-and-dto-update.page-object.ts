import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class EntityWithPaginationAndDTOUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.entityWithPaginationAndDTO.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  leaInput: ElementFinder = element(by.css('input#entity-with-pagination-and-dto-lea'));
}
