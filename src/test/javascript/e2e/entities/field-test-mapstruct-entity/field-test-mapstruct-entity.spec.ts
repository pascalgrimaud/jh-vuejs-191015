/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestMapstructEntityComponentsPage, { FieldTestMapstructEntityDeleteDialog } from './field-test-mapstruct-entity.page-object';
import FieldTestMapstructEntityUpdatePage from './field-test-mapstruct-entity-update.page-object';
import FieldTestMapstructEntityDetailsPage from './field-test-mapstruct-entity-details.page-object';

import {
  clear,
  click,
  getRecordsCount,
  isVisible,
  selectLastOption,
  waitUntilAllDisplayed,
  waitUntilAnyDisplayed,
  waitUntilCount,
  waitUntilDisplayed,
  waitUntilHidden
} from '../../util/utils';

import path from 'path';

const expect = chai.expect;

describe('FieldTestMapstructEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let updatePage: FieldTestMapstructEntityUpdatePage;
  let detailsPage: FieldTestMapstructEntityDetailsPage;
  let listPage: FieldTestMapstructEntityComponentsPage;
  let deleteDialog: FieldTestMapstructEntityDeleteDialog;
  const fileToUpload = '../../../../../main/webapp/content/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);
  let beforeRecordsCount = 0;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    await navBarPage.login('admin', 'admin');
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });

  it('should load FieldTestMapstructEntities', async () => {
    await navBarPage.getEntityPage('field-test-mapstruct-entity');
    listPage = new FieldTestMapstructEntityComponentsPage();

    await waitUntilAllDisplayed([listPage.title, listPage.footer]);

    expect(await listPage.title.getText()).not.to.be.empty;
    expect(await listPage.createButton.isEnabled()).to.be.true;

    await waitUntilAnyDisplayed([listPage.noRecords, listPage.table]);
    beforeRecordsCount = (await isVisible(listPage.noRecords)) ? 0 : await getRecordsCount(listPage.table);
  });

  describe('Create flow', () => {
    it('should load create FieldTestMapstructEntity page', async () => {
      await listPage.createButton.click();
      updatePage = new FieldTestMapstructEntityUpdatePage();

      await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

      expect(await updatePage.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestMapstructEntity.home.createOrEditLabel/);
    });

    it('should create and save FieldTestMapstructEntities', async () => {
      await updatePage.stringEvaInput.sendKeys('stringEva');
      expect(await updatePage.stringEvaInput.getAttribute('value')).to.match(/stringEva/);

      await updatePage.stringRequiredEvaInput.sendKeys('stringRequiredEva');
      expect(await updatePage.stringRequiredEvaInput.getAttribute('value')).to.match(/stringRequiredEva/);

      await updatePage.stringMinlengthEvaInput.sendKeys('stringMinlengthEva');
      expect(await updatePage.stringMinlengthEvaInput.getAttribute('value')).to.match(/stringMinlengthEva/);

      await updatePage.stringMaxlengthEvaInput.sendKeys('stringMaxlengthEva');
      expect(await updatePage.stringMaxlengthEvaInput.getAttribute('value')).to.match(/stringMaxlengthEva/);

      await updatePage.stringPatternEvaInput.sendKeys('stringPatternEva');
      expect(await updatePage.stringPatternEvaInput.getAttribute('value')).to.match(/stringPatternEva/);

      await updatePage.integerEvaInput.sendKeys('5');
      expect(await updatePage.integerEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.integerRequiredEvaInput.sendKeys('5');
      expect(await updatePage.integerRequiredEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMinEvaInput.sendKeys('5');
      expect(await updatePage.integerMinEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMaxEvaInput.sendKeys('5');
      expect(await updatePage.integerMaxEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.longEvaInput.sendKeys('5');
      expect(await updatePage.longEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.longRequiredEvaInput.sendKeys('5');
      expect(await updatePage.longRequiredEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.longMinEvaInput.sendKeys('5');
      expect(await updatePage.longMinEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.longMaxEvaInput.sendKeys('5');
      expect(await updatePage.longMaxEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.floatEvaInput.sendKeys('5');
      expect(await updatePage.floatEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.floatRequiredEvaInput.sendKeys('5');
      expect(await updatePage.floatRequiredEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMinEvaInput.sendKeys('5');
      expect(await updatePage.floatMinEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMaxEvaInput.sendKeys('5');
      expect(await updatePage.floatMaxEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleRequiredEvaInput.sendKeys('5');
      expect(await updatePage.doubleRequiredEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMinEvaInput.sendKeys('5');
      expect(await updatePage.doubleMinEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMaxEvaInput.sendKeys('5');
      expect(await updatePage.doubleMaxEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalRequiredEvaInput.sendKeys('5');
      expect(await updatePage.bigDecimalRequiredEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMinEvaInput.sendKeys('5');
      expect(await updatePage.bigDecimalMinEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMaxEvaInput.sendKeys('5');
      expect(await updatePage.bigDecimalMaxEvaInput.getAttribute('value')).to.eq('5');

      await updatePage.localDateEvaInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateEvaInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.localDateRequiredEvaInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateRequiredEvaInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.instantEvaInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instantEvaInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.instanteRequiredEvaInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instanteRequiredEvaInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeEvaInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeEvaInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeRequiredEvaInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeRequiredEvaInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.durationEvaInput.sendKeys('PT12S');
      expect(await updatePage.durationEvaInput.getAttribute('value')).to.contain('12');

      await updatePage.durationRequiredEvaInput.sendKeys('PT12S');
      expect(await updatePage.durationRequiredEvaInput.getAttribute('value')).to.contain('12');

      const selectedBooleanEva = await updatePage.booleanEvaInput.isSelected();
      if (selectedBooleanEva) {
        await updatePage.booleanEvaInput.click();
        expect(await updatePage.booleanEvaInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanEvaInput.click();
        expect(await updatePage.booleanEvaInput.isSelected()).to.be.true;
      }

      const selectedBooleanRequiredEva = await updatePage.booleanRequiredEvaInput.isSelected();
      if (selectedBooleanRequiredEva) {
        await updatePage.booleanRequiredEvaInput.click();
        expect(await updatePage.booleanRequiredEvaInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanRequiredEvaInput.click();
        expect(await updatePage.booleanRequiredEvaInput.isSelected()).to.be.true;
      }

      await selectLastOption(updatePage.enumEvaSelect);

      await selectLastOption(updatePage.enumRequiredEvaSelect);

      await updatePage.uuidEvaInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidEvaInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await updatePage.uuidRequiredEvaInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidRequiredEvaInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await waitUntilDisplayed(updatePage.byteImageEvaInput);
      await updatePage.byteImageEvaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageRequiredEvaInput);
      await updatePage.byteImageRequiredEvaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMinbytesEvaInput);
      await updatePage.byteImageMinbytesEvaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMaxbytesEvaInput);
      await updatePage.byteImageMaxbytesEvaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyEvaInput);
      await updatePage.byteAnyEvaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyRequiredEvaInput);
      await updatePage.byteAnyRequiredEvaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMinbytesEvaInput);
      await updatePage.byteAnyMinbytesEvaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMaxbytesEvaInput);
      await updatePage.byteAnyMaxbytesEvaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteTextEvaInput);
      await updatePage.byteTextEvaInput.sendKeys('byteTextEva');

      expect(await updatePage.byteTextEvaInput.getAttribute('value')).to.match(/byteTextEva/);

      await waitUntilDisplayed(updatePage.byteTextRequiredEvaInput);
      await updatePage.byteTextRequiredEvaInput.sendKeys('byteTextRequiredEva');

      expect(await updatePage.byteTextRequiredEvaInput.getAttribute('value')).to.match(/byteTextRequiredEva/);

      expect(await updatePage.saveButton.isEnabled()).to.be.true;
      await updatePage.saveButton.click();

      await waitUntilHidden(updatePage.saveButton);
      expect(await isVisible(updatePage.saveButton)).to.be.false;

      await waitUntilDisplayed(listPage.successAlert);
      expect(await listPage.successAlert.isDisplayed()).to.be.true;

      await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      expect(await listPage.records.count()).to.eq(beforeRecordsCount + 1);
    });

    describe('Details, Update, Delete flow', () => {
      after(async () => {
        const deleteButton = listPage.getDeleteButton(listPage.records.last());
        await click(deleteButton);

        deleteDialog = new FieldTestMapstructEntityDeleteDialog();
        await waitUntilDisplayed(deleteDialog.dialog);

        expect(await deleteDialog.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestMapstructEntity.delete.question/);

        await click(deleteDialog.confirmButton);
        await waitUntilHidden(deleteDialog.dialog);

        expect(await isVisible(deleteDialog.dialog)).to.be.false;
        expect(await listPage.dangerAlert.isDisplayed()).to.be.true;

        await waitUntilCount(listPage.records, beforeRecordsCount);
        expect(await listPage.records.count()).to.eq(beforeRecordsCount);
      });

      it('should load details FieldTestMapstructEntity page and fetch data', async () => {
        const detailsButton = listPage.getDetailsButton(listPage.records.last());
        await click(detailsButton);

        detailsPage = new FieldTestMapstructEntityDetailsPage();

        await waitUntilAllDisplayed([detailsPage.title, detailsPage.backButton, detailsPage.firstDetail]);

        expect(await detailsPage.title.getText()).not.to.be.empty;
        expect(await detailsPage.firstDetail.getText()).not.to.be.empty;

        await click(detailsPage.backButton);
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });

      it('should load edit FieldTestMapstructEntity page, fetch data and update', async () => {
        const editButton = listPage.getEditButton(listPage.records.last());
        await click(editButton);

        await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

        expect(await updatePage.title.getText()).not.to.be.empty;

        await updatePage.stringEvaInput.clear();
        await updatePage.stringEvaInput.sendKeys('modified');
        expect(await updatePage.stringEvaInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringRequiredEvaInput.clear();
        await updatePage.stringRequiredEvaInput.sendKeys('modified');
        expect(await updatePage.stringRequiredEvaInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMinlengthEvaInput.clear();
        await updatePage.stringMinlengthEvaInput.sendKeys('modified');
        expect(await updatePage.stringMinlengthEvaInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMaxlengthEvaInput.clear();
        await updatePage.stringMaxlengthEvaInput.sendKeys('modified');
        expect(await updatePage.stringMaxlengthEvaInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringPatternEvaInput.clear();
        await updatePage.stringPatternEvaInput.sendKeys('modified');
        expect(await updatePage.stringPatternEvaInput.getAttribute('value')).to.match(/modified/);

        await clear(updatePage.integerEvaInput);
        await updatePage.integerEvaInput.sendKeys('6');
        expect(await updatePage.integerEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerRequiredEvaInput);
        await updatePage.integerRequiredEvaInput.sendKeys('6');
        expect(await updatePage.integerRequiredEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMinEvaInput);
        await updatePage.integerMinEvaInput.sendKeys('6');
        expect(await updatePage.integerMinEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMaxEvaInput);
        await updatePage.integerMaxEvaInput.sendKeys('6');
        expect(await updatePage.integerMaxEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longEvaInput);
        await updatePage.longEvaInput.sendKeys('6');
        expect(await updatePage.longEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longRequiredEvaInput);
        await updatePage.longRequiredEvaInput.sendKeys('6');
        expect(await updatePage.longRequiredEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMinEvaInput);
        await updatePage.longMinEvaInput.sendKeys('6');
        expect(await updatePage.longMinEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMaxEvaInput);
        await updatePage.longMaxEvaInput.sendKeys('6');
        expect(await updatePage.longMaxEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatEvaInput);
        await updatePage.floatEvaInput.sendKeys('6');
        expect(await updatePage.floatEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatRequiredEvaInput);
        await updatePage.floatRequiredEvaInput.sendKeys('6');
        expect(await updatePage.floatRequiredEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMinEvaInput);
        await updatePage.floatMinEvaInput.sendKeys('6');
        expect(await updatePage.floatMinEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMaxEvaInput);
        await updatePage.floatMaxEvaInput.sendKeys('6');
        expect(await updatePage.floatMaxEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleRequiredEvaInput);
        await updatePage.doubleRequiredEvaInput.sendKeys('6');
        expect(await updatePage.doubleRequiredEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMinEvaInput);
        await updatePage.doubleMinEvaInput.sendKeys('6');
        expect(await updatePage.doubleMinEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMaxEvaInput);
        await updatePage.doubleMaxEvaInput.sendKeys('6');
        expect(await updatePage.doubleMaxEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalRequiredEvaInput);
        await updatePage.bigDecimalRequiredEvaInput.sendKeys('6');
        expect(await updatePage.bigDecimalRequiredEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMinEvaInput);
        await updatePage.bigDecimalMinEvaInput.sendKeys('6');
        expect(await updatePage.bigDecimalMinEvaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMaxEvaInput);
        await updatePage.bigDecimalMaxEvaInput.sendKeys('6');
        expect(await updatePage.bigDecimalMaxEvaInput.getAttribute('value')).to.eq('6');

        await updatePage.localDateEvaInput.clear();
        await updatePage.localDateEvaInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateEvaInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.localDateRequiredEvaInput.clear();
        await updatePage.localDateRequiredEvaInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateRequiredEvaInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.instantEvaInput.clear();
        await updatePage.instantEvaInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instantEvaInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.instanteRequiredEvaInput.clear();
        await updatePage.instanteRequiredEvaInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instanteRequiredEvaInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeEvaInput.clear();
        await updatePage.zonedDateTimeEvaInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeEvaInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeRequiredEvaInput.clear();
        await updatePage.zonedDateTimeRequiredEvaInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeRequiredEvaInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.durationEvaInput.clear();
        await updatePage.durationEvaInput.sendKeys('PT14S');
        expect(await updatePage.durationEvaInput.getAttribute('value')).to.contain('14');

        await updatePage.durationRequiredEvaInput.clear();
        await updatePage.durationRequiredEvaInput.sendKeys('PT14S');
        expect(await updatePage.durationRequiredEvaInput.getAttribute('value')).to.contain('14');

        const selectedBooleanEva = await updatePage.booleanEvaInput.isSelected();
        if (selectedBooleanEva) {
          await updatePage.booleanEvaInput.click();
          expect(await updatePage.booleanEvaInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanEvaInput.click();
          expect(await updatePage.booleanEvaInput.isSelected()).to.be.true;
        }

        const selectedBooleanRequiredEva = await updatePage.booleanRequiredEvaInput.isSelected();
        if (selectedBooleanRequiredEva) {
          await updatePage.booleanRequiredEvaInput.click();
          expect(await updatePage.booleanRequiredEvaInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanRequiredEvaInput.click();
          expect(await updatePage.booleanRequiredEvaInput.isSelected()).to.be.true;
        }

        await updatePage.uuidEvaInput.clear();
        await updatePage.uuidEvaInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidEvaInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.uuidRequiredEvaInput.clear();
        await updatePage.uuidRequiredEvaInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidRequiredEvaInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.byteTextEvaInput.clear();
        await updatePage.byteTextEvaInput.sendKeys('updatedbyteTextEva');
        expect(await updatePage.byteTextEvaInput.getAttribute('value')).to.match(/updatedbyteTextEva/);

        await updatePage.byteTextRequiredEvaInput.clear();
        await updatePage.byteTextRequiredEvaInput.sendKeys('updatedbyteTextRequiredEva');
        expect(await updatePage.byteTextRequiredEvaInput.getAttribute('value')).to.match(/updatedbyteTextRequiredEva/);

        await updatePage.saveButton.click();

        await waitUntilHidden(updatePage.saveButton);

        expect(await isVisible(updatePage.saveButton)).to.be.false;
        expect(await listPage.infoAlert.isDisplayed()).to.be.true;
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });
    });
  });
});
