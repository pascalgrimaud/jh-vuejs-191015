import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class EntityWithPaginationUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.entityWithPagination.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  nathanInput: ElementFinder = element(by.css('input#entity-with-pagination-nathan'));
}
