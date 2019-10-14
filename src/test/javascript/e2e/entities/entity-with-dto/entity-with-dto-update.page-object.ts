import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class EntityWithDTOUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.entityWithDTO.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  emmaInput: ElementFinder = element(by.css('input#entity-with-dto-emma'));
}
