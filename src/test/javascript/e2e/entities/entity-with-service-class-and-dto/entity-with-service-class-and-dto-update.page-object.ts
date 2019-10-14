import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class EntityWithServiceClassAndDTOUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.entityWithServiceClassAndDTO.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  lucasInput: ElementFinder = element(by.css('input#entity-with-service-class-and-dto-lucas'));
}
