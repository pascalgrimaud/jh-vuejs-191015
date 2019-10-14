/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestPaginationEntityComponentsPage, { FieldTestPaginationEntityDeleteDialog } from './field-test-pagination-entity.page-object';
import FieldTestPaginationEntityUpdatePage from './field-test-pagination-entity-update.page-object';
import FieldTestPaginationEntityDetailsPage from './field-test-pagination-entity-details.page-object';

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

describe('FieldTestPaginationEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let updatePage: FieldTestPaginationEntityUpdatePage;
  let detailsPage: FieldTestPaginationEntityDetailsPage;
  let listPage: FieldTestPaginationEntityComponentsPage;
  let deleteDialog: FieldTestPaginationEntityDeleteDialog;
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

  it('should load FieldTestPaginationEntities', async () => {
    await navBarPage.getEntityPage('field-test-pagination-entity');
    listPage = new FieldTestPaginationEntityComponentsPage();

    await waitUntilAllDisplayed([listPage.title, listPage.footer]);

    expect(await listPage.title.getText()).not.to.be.empty;
    expect(await listPage.createButton.isEnabled()).to.be.true;

    await waitUntilAnyDisplayed([listPage.noRecords, listPage.table]);
    beforeRecordsCount = (await isVisible(listPage.noRecords)) ? 0 : await getRecordsCount(listPage.table);
  });

  describe('Create flow', () => {
    it('should load create FieldTestPaginationEntity page', async () => {
      await listPage.createButton.click();
      updatePage = new FieldTestPaginationEntityUpdatePage();

      await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

      expect(await updatePage.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestPaginationEntity.home.createOrEditLabel/);
    });

    it('should create and save FieldTestPaginationEntities', async () => {
      await updatePage.stringAliceInput.sendKeys('stringAlice');
      expect(await updatePage.stringAliceInput.getAttribute('value')).to.match(/stringAlice/);

      await updatePage.stringRequiredAliceInput.sendKeys('stringRequiredAlice');
      expect(await updatePage.stringRequiredAliceInput.getAttribute('value')).to.match(/stringRequiredAlice/);

      await updatePage.stringMinlengthAliceInput.sendKeys('stringMinlengthAlice');
      expect(await updatePage.stringMinlengthAliceInput.getAttribute('value')).to.match(/stringMinlengthAlice/);

      await updatePage.stringMaxlengthAliceInput.sendKeys('stringMaxlengthAlice');
      expect(await updatePage.stringMaxlengthAliceInput.getAttribute('value')).to.match(/stringMaxlengthAlice/);

      await updatePage.stringPatternAliceInput.sendKeys('stringPatternAlice');
      expect(await updatePage.stringPatternAliceInput.getAttribute('value')).to.match(/stringPatternAlice/);

      await updatePage.integerAliceInput.sendKeys('5');
      expect(await updatePage.integerAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.integerRequiredAliceInput.sendKeys('5');
      expect(await updatePage.integerRequiredAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMinAliceInput.sendKeys('5');
      expect(await updatePage.integerMinAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMaxAliceInput.sendKeys('5');
      expect(await updatePage.integerMaxAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.longAliceInput.sendKeys('5');
      expect(await updatePage.longAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.longRequiredAliceInput.sendKeys('5');
      expect(await updatePage.longRequiredAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.longMinAliceInput.sendKeys('5');
      expect(await updatePage.longMinAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.longMaxAliceInput.sendKeys('5');
      expect(await updatePage.longMaxAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.floatAliceInput.sendKeys('5');
      expect(await updatePage.floatAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.floatRequiredAliceInput.sendKeys('5');
      expect(await updatePage.floatRequiredAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMinAliceInput.sendKeys('5');
      expect(await updatePage.floatMinAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMaxAliceInput.sendKeys('5');
      expect(await updatePage.floatMaxAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleRequiredAliceInput.sendKeys('5');
      expect(await updatePage.doubleRequiredAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMinAliceInput.sendKeys('5');
      expect(await updatePage.doubleMinAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMaxAliceInput.sendKeys('5');
      expect(await updatePage.doubleMaxAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalRequiredAliceInput.sendKeys('5');
      expect(await updatePage.bigDecimalRequiredAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMinAliceInput.sendKeys('5');
      expect(await updatePage.bigDecimalMinAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMaxAliceInput.sendKeys('5');
      expect(await updatePage.bigDecimalMaxAliceInput.getAttribute('value')).to.eq('5');

      await updatePage.localDateAliceInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateAliceInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.localDateRequiredAliceInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateRequiredAliceInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.instantAliceInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instantAliceInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.instanteRequiredAliceInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instanteRequiredAliceInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeAliceInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeAliceInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeRequiredAliceInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeRequiredAliceInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.durationAliceInput.sendKeys('PT12S');
      expect(await updatePage.durationAliceInput.getAttribute('value')).to.contain('12');

      await updatePage.durationRequiredAliceInput.sendKeys('PT12S');
      expect(await updatePage.durationRequiredAliceInput.getAttribute('value')).to.contain('12');

      const selectedBooleanAlice = await updatePage.booleanAliceInput.isSelected();
      if (selectedBooleanAlice) {
        await updatePage.booleanAliceInput.click();
        expect(await updatePage.booleanAliceInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanAliceInput.click();
        expect(await updatePage.booleanAliceInput.isSelected()).to.be.true;
      }

      const selectedBooleanRequiredAlice = await updatePage.booleanRequiredAliceInput.isSelected();
      if (selectedBooleanRequiredAlice) {
        await updatePage.booleanRequiredAliceInput.click();
        expect(await updatePage.booleanRequiredAliceInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanRequiredAliceInput.click();
        expect(await updatePage.booleanRequiredAliceInput.isSelected()).to.be.true;
      }

      await selectLastOption(updatePage.enumAliceSelect);

      await selectLastOption(updatePage.enumRequiredAliceSelect);

      await updatePage.uuidAliceInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidAliceInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await updatePage.uuidRequiredAliceInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidRequiredAliceInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await waitUntilDisplayed(updatePage.byteImageAliceInput);
      await updatePage.byteImageAliceInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageRequiredAliceInput);
      await updatePage.byteImageRequiredAliceInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMinbytesAliceInput);
      await updatePage.byteImageMinbytesAliceInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMaxbytesAliceInput);
      await updatePage.byteImageMaxbytesAliceInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyAliceInput);
      await updatePage.byteAnyAliceInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyRequiredAliceInput);
      await updatePage.byteAnyRequiredAliceInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMinbytesAliceInput);
      await updatePage.byteAnyMinbytesAliceInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMaxbytesAliceInput);
      await updatePage.byteAnyMaxbytesAliceInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteTextAliceInput);
      await updatePage.byteTextAliceInput.sendKeys('byteTextAlice');

      expect(await updatePage.byteTextAliceInput.getAttribute('value')).to.match(/byteTextAlice/);

      await waitUntilDisplayed(updatePage.byteTextRequiredAliceInput);
      await updatePage.byteTextRequiredAliceInput.sendKeys('byteTextRequiredAlice');

      expect(await updatePage.byteTextRequiredAliceInput.getAttribute('value')).to.match(/byteTextRequiredAlice/);

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
        const deleteButton = listPage.getDeleteButton(listPage.records.first());
        await click(deleteButton);

        deleteDialog = new FieldTestPaginationEntityDeleteDialog();
        await waitUntilDisplayed(deleteDialog.dialog);

        expect(await deleteDialog.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestPaginationEntity.delete.question/);

        await click(deleteDialog.confirmButton);
        await waitUntilHidden(deleteDialog.dialog);

        expect(await isVisible(deleteDialog.dialog)).to.be.false;
        expect(await listPage.dangerAlert.isDisplayed()).to.be.true;

        await waitUntilCount(listPage.records, beforeRecordsCount);
        expect(await listPage.records.count()).to.eq(beforeRecordsCount);
      });

      it('should load details FieldTestPaginationEntity page and fetch data', async () => {
        const detailsButton = listPage.getDetailsButton(listPage.records.first());
        await click(detailsButton);

        detailsPage = new FieldTestPaginationEntityDetailsPage();

        await waitUntilAllDisplayed([detailsPage.title, detailsPage.backButton, detailsPage.firstDetail]);

        expect(await detailsPage.title.getText()).not.to.be.empty;
        expect(await detailsPage.firstDetail.getText()).not.to.be.empty;

        await click(detailsPage.backButton);
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });

      it('should load edit FieldTestPaginationEntity page, fetch data and update', async () => {
        const editButton = listPage.getEditButton(listPage.records.first());
        await click(editButton);

        await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

        expect(await updatePage.title.getText()).not.to.be.empty;

        await updatePage.stringAliceInput.clear();
        await updatePage.stringAliceInput.sendKeys('modified');
        expect(await updatePage.stringAliceInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringRequiredAliceInput.clear();
        await updatePage.stringRequiredAliceInput.sendKeys('modified');
        expect(await updatePage.stringRequiredAliceInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMinlengthAliceInput.clear();
        await updatePage.stringMinlengthAliceInput.sendKeys('modified');
        expect(await updatePage.stringMinlengthAliceInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMaxlengthAliceInput.clear();
        await updatePage.stringMaxlengthAliceInput.sendKeys('modified');
        expect(await updatePage.stringMaxlengthAliceInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringPatternAliceInput.clear();
        await updatePage.stringPatternAliceInput.sendKeys('modified');
        expect(await updatePage.stringPatternAliceInput.getAttribute('value')).to.match(/modified/);

        await clear(updatePage.integerAliceInput);
        await updatePage.integerAliceInput.sendKeys('6');
        expect(await updatePage.integerAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerRequiredAliceInput);
        await updatePage.integerRequiredAliceInput.sendKeys('6');
        expect(await updatePage.integerRequiredAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMinAliceInput);
        await updatePage.integerMinAliceInput.sendKeys('6');
        expect(await updatePage.integerMinAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMaxAliceInput);
        await updatePage.integerMaxAliceInput.sendKeys('6');
        expect(await updatePage.integerMaxAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longAliceInput);
        await updatePage.longAliceInput.sendKeys('6');
        expect(await updatePage.longAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longRequiredAliceInput);
        await updatePage.longRequiredAliceInput.sendKeys('6');
        expect(await updatePage.longRequiredAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMinAliceInput);
        await updatePage.longMinAliceInput.sendKeys('6');
        expect(await updatePage.longMinAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMaxAliceInput);
        await updatePage.longMaxAliceInput.sendKeys('6');
        expect(await updatePage.longMaxAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatAliceInput);
        await updatePage.floatAliceInput.sendKeys('6');
        expect(await updatePage.floatAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatRequiredAliceInput);
        await updatePage.floatRequiredAliceInput.sendKeys('6');
        expect(await updatePage.floatRequiredAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMinAliceInput);
        await updatePage.floatMinAliceInput.sendKeys('6');
        expect(await updatePage.floatMinAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMaxAliceInput);
        await updatePage.floatMaxAliceInput.sendKeys('6');
        expect(await updatePage.floatMaxAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleRequiredAliceInput);
        await updatePage.doubleRequiredAliceInput.sendKeys('6');
        expect(await updatePage.doubleRequiredAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMinAliceInput);
        await updatePage.doubleMinAliceInput.sendKeys('6');
        expect(await updatePage.doubleMinAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMaxAliceInput);
        await updatePage.doubleMaxAliceInput.sendKeys('6');
        expect(await updatePage.doubleMaxAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalRequiredAliceInput);
        await updatePage.bigDecimalRequiredAliceInput.sendKeys('6');
        expect(await updatePage.bigDecimalRequiredAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMinAliceInput);
        await updatePage.bigDecimalMinAliceInput.sendKeys('6');
        expect(await updatePage.bigDecimalMinAliceInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMaxAliceInput);
        await updatePage.bigDecimalMaxAliceInput.sendKeys('6');
        expect(await updatePage.bigDecimalMaxAliceInput.getAttribute('value')).to.eq('6');

        await updatePage.localDateAliceInput.clear();
        await updatePage.localDateAliceInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateAliceInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.localDateRequiredAliceInput.clear();
        await updatePage.localDateRequiredAliceInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateRequiredAliceInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.instantAliceInput.clear();
        await updatePage.instantAliceInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instantAliceInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.instanteRequiredAliceInput.clear();
        await updatePage.instanteRequiredAliceInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instanteRequiredAliceInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeAliceInput.clear();
        await updatePage.zonedDateTimeAliceInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeAliceInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeRequiredAliceInput.clear();
        await updatePage.zonedDateTimeRequiredAliceInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeRequiredAliceInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.durationAliceInput.clear();
        await updatePage.durationAliceInput.sendKeys('PT14S');
        expect(await updatePage.durationAliceInput.getAttribute('value')).to.contain('14');

        await updatePage.durationRequiredAliceInput.clear();
        await updatePage.durationRequiredAliceInput.sendKeys('PT14S');
        expect(await updatePage.durationRequiredAliceInput.getAttribute('value')).to.contain('14');

        const selectedBooleanAlice = await updatePage.booleanAliceInput.isSelected();
        if (selectedBooleanAlice) {
          await updatePage.booleanAliceInput.click();
          expect(await updatePage.booleanAliceInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanAliceInput.click();
          expect(await updatePage.booleanAliceInput.isSelected()).to.be.true;
        }

        const selectedBooleanRequiredAlice = await updatePage.booleanRequiredAliceInput.isSelected();
        if (selectedBooleanRequiredAlice) {
          await updatePage.booleanRequiredAliceInput.click();
          expect(await updatePage.booleanRequiredAliceInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanRequiredAliceInput.click();
          expect(await updatePage.booleanRequiredAliceInput.isSelected()).to.be.true;
        }

        await updatePage.uuidAliceInput.clear();
        await updatePage.uuidAliceInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidAliceInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.uuidRequiredAliceInput.clear();
        await updatePage.uuidRequiredAliceInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidRequiredAliceInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.byteTextAliceInput.clear();
        await updatePage.byteTextAliceInput.sendKeys('updatedbyteTextAlice');
        expect(await updatePage.byteTextAliceInput.getAttribute('value')).to.match(/updatedbyteTextAlice/);

        await updatePage.byteTextRequiredAliceInput.clear();
        await updatePage.byteTextRequiredAliceInput.sendKeys('updatedbyteTextRequiredAlice');
        expect(await updatePage.byteTextRequiredAliceInput.getAttribute('value')).to.match(/updatedbyteTextRequiredAlice/);

        await updatePage.saveButton.click();

        await waitUntilHidden(updatePage.saveButton);

        expect(await isVisible(updatePage.saveButton)).to.be.false;
        expect(await listPage.infoAlert.isDisplayed()).to.be.true;
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });
    });
  });
});
