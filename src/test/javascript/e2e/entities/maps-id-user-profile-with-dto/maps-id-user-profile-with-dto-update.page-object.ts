import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class MapsIdUserProfileWithDTOUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('jhipsterApp.mapsIdUserProfileWithDTO.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  dateOfBirthInput: ElementFinder = element(by.css('input#maps-id-user-profile-with-dto-dateOfBirth'));

  userSelect = element(by.css('select#maps-id-user-profile-with-dto-user'));
}
