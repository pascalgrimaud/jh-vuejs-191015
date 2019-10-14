import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class EntityWithServiceImplUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.entityWithServiceImpl.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  claraInput: ElementFinder = element(by.css('input#entity-with-service-impl-clara'));
}
