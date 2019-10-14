/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestEntityComponentsPage, { FieldTestEntityDeleteDialog } from './field-test-entity.page-object';
import FieldTestEntityUpdatePage from './field-test-entity-update.page-object';
import FieldTestEntityDetailsPage from './field-test-entity-details.page-object';

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

describe('FieldTestEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let updatePage: FieldTestEntityUpdatePage;
  let detailsPage: FieldTestEntityDetailsPage;
  let listPage: FieldTestEntityComponentsPage;
  let deleteDialog: FieldTestEntityDeleteDialog;
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

  it('should load FieldTestEntities', async () => {
    await navBarPage.getEntityPage('field-test-entity');
    listPage = new FieldTestEntityComponentsPage();

    await waitUntilAllDisplayed([listPage.title, listPage.footer]);

    expect(await listPage.title.getText()).not.to.be.empty;
    expect(await listPage.createButton.isEnabled()).to.be.true;

    await waitUntilAnyDisplayed([listPage.noRecords, listPage.table]);
    beforeRecordsCount = (await isVisible(listPage.noRecords)) ? 0 : await getRecordsCount(listPage.table);
  });

  describe('Create flow', () => {
    it('should load create FieldTestEntity page', async () => {
      await listPage.createButton.click();
      updatePage = new FieldTestEntityUpdatePage();

      await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

      expect(await updatePage.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestEntity.home.createOrEditLabel/);
    });

    it('should create and save FieldTestEntities', async () => {
      await updatePage.stringTomInput.sendKeys('stringTom');
      expect(await updatePage.stringTomInput.getAttribute('value')).to.match(/stringTom/);

      await updatePage.stringRequiredTomInput.sendKeys('stringRequiredTom');
      expect(await updatePage.stringRequiredTomInput.getAttribute('value')).to.match(/stringRequiredTom/);

      await updatePage.stringMinlengthTomInput.sendKeys('stringMinlengthTom');
      expect(await updatePage.stringMinlengthTomInput.getAttribute('value')).to.match(/stringMinlengthTom/);

      await updatePage.stringMaxlengthTomInput.sendKeys('stringMaxlengthTom');
      expect(await updatePage.stringMaxlengthTomInput.getAttribute('value')).to.match(/stringMaxlengthTom/);

      await updatePage.stringPatternTomInput.sendKeys('stringPatternTom');
      expect(await updatePage.stringPatternTomInput.getAttribute('value')).to.match(/stringPatternTom/);

      await updatePage.integerTomInput.sendKeys('5');
      expect(await updatePage.integerTomInput.getAttribute('value')).to.eq('5');

      await updatePage.integerRequiredTomInput.sendKeys('5');
      expect(await updatePage.integerRequiredTomInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMinTomInput.sendKeys('5');
      expect(await updatePage.integerMinTomInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMaxTomInput.sendKeys('5');
      expect(await updatePage.integerMaxTomInput.getAttribute('value')).to.eq('5');

      await updatePage.longTomInput.sendKeys('5');
      expect(await updatePage.longTomInput.getAttribute('value')).to.eq('5');

      await updatePage.longRequiredTomInput.sendKeys('5');
      expect(await updatePage.longRequiredTomInput.getAttribute('value')).to.eq('5');

      await updatePage.longMinTomInput.sendKeys('5');
      expect(await updatePage.longMinTomInput.getAttribute('value')).to.eq('5');

      await updatePage.longMaxTomInput.sendKeys('5');
      expect(await updatePage.longMaxTomInput.getAttribute('value')).to.eq('5');

      await updatePage.floatTomInput.sendKeys('5');
      expect(await updatePage.floatTomInput.getAttribute('value')).to.eq('5');

      await updatePage.floatRequiredTomInput.sendKeys('5');
      expect(await updatePage.floatRequiredTomInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMinTomInput.sendKeys('5');
      expect(await updatePage.floatMinTomInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMaxTomInput.sendKeys('5');
      expect(await updatePage.floatMaxTomInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleRequiredTomInput.sendKeys('5');
      expect(await updatePage.doubleRequiredTomInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMinTomInput.sendKeys('5');
      expect(await updatePage.doubleMinTomInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMaxTomInput.sendKeys('5');
      expect(await updatePage.doubleMaxTomInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalRequiredTomInput.sendKeys('5');
      expect(await updatePage.bigDecimalRequiredTomInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMinTomInput.sendKeys('5');
      expect(await updatePage.bigDecimalMinTomInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMaxTomInput.sendKeys('5');
      expect(await updatePage.bigDecimalMaxTomInput.getAttribute('value')).to.eq('5');

      await updatePage.localDateTomInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateTomInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.localDateRequiredTomInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateRequiredTomInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.instantTomInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instantTomInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.instantRequiredTomInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instantRequiredTomInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeTomInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeTomInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeRequiredTomInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeRequiredTomInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.durationTomInput.sendKeys('PT12S');
      expect(await updatePage.durationTomInput.getAttribute('value')).to.contain('12');

      await updatePage.durationRequiredTomInput.sendKeys('PT12S');
      expect(await updatePage.durationRequiredTomInput.getAttribute('value')).to.contain('12');

      const selectedBooleanTom = await updatePage.booleanTomInput.isSelected();
      if (selectedBooleanTom) {
        await updatePage.booleanTomInput.click();
        expect(await updatePage.booleanTomInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanTomInput.click();
        expect(await updatePage.booleanTomInput.isSelected()).to.be.true;
      }

      const selectedBooleanRequiredTom = await updatePage.booleanRequiredTomInput.isSelected();
      if (selectedBooleanRequiredTom) {
        await updatePage.booleanRequiredTomInput.click();
        expect(await updatePage.booleanRequiredTomInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanRequiredTomInput.click();
        expect(await updatePage.booleanRequiredTomInput.isSelected()).to.be.true;
      }

      await selectLastOption(updatePage.enumTomSelect);

      await selectLastOption(updatePage.enumRequiredTomSelect);

      await updatePage.uuidTomInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidTomInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await updatePage.uuidRequiredTomInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidRequiredTomInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await waitUntilDisplayed(updatePage.byteImageTomInput);
      await updatePage.byteImageTomInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageRequiredTomInput);
      await updatePage.byteImageRequiredTomInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMinbytesTomInput);
      await updatePage.byteImageMinbytesTomInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMaxbytesTomInput);
      await updatePage.byteImageMaxbytesTomInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyTomInput);
      await updatePage.byteAnyTomInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyRequiredTomInput);
      await updatePage.byteAnyRequiredTomInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMinbytesTomInput);
      await updatePage.byteAnyMinbytesTomInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMaxbytesTomInput);
      await updatePage.byteAnyMaxbytesTomInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteTextTomInput);
      await updatePage.byteTextTomInput.sendKeys('byteTextTom');

      expect(await updatePage.byteTextTomInput.getAttribute('value')).to.match(/byteTextTom/);

      await waitUntilDisplayed(updatePage.byteTextRequiredTomInput);
      await updatePage.byteTextRequiredTomInput.sendKeys('byteTextRequiredTom');

      expect(await updatePage.byteTextRequiredTomInput.getAttribute('value')).to.match(/byteTextRequiredTom/);

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

        deleteDialog = new FieldTestEntityDeleteDialog();
        await waitUntilDisplayed(deleteDialog.dialog);

        expect(await deleteDialog.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestEntity.delete.question/);

        await click(deleteDialog.confirmButton);
        await waitUntilHidden(deleteDialog.dialog);

        expect(await isVisible(deleteDialog.dialog)).to.be.false;
        expect(await listPage.dangerAlert.isDisplayed()).to.be.true;

        await waitUntilCount(listPage.records, beforeRecordsCount);
        expect(await listPage.records.count()).to.eq(beforeRecordsCount);
      });

      it('should load details FieldTestEntity page and fetch data', async () => {
        const detailsButton = listPage.getDetailsButton(listPage.records.last());
        await click(detailsButton);

        detailsPage = new FieldTestEntityDetailsPage();

        await waitUntilAllDisplayed([detailsPage.title, detailsPage.backButton, detailsPage.firstDetail]);

        expect(await detailsPage.title.getText()).not.to.be.empty;
        expect(await detailsPage.firstDetail.getText()).not.to.be.empty;

        await click(detailsPage.backButton);
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });

      it('should load edit FieldTestEntity page, fetch data and update', async () => {
        const editButton = listPage.getEditButton(listPage.records.last());
        await click(editButton);

        await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

        expect(await updatePage.title.getText()).not.to.be.empty;

        await updatePage.stringTomInput.clear();
        await updatePage.stringTomInput.sendKeys('modified');
        expect(await updatePage.stringTomInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringRequiredTomInput.clear();
        await updatePage.stringRequiredTomInput.sendKeys('modified');
        expect(await updatePage.stringRequiredTomInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMinlengthTomInput.clear();
        await updatePage.stringMinlengthTomInput.sendKeys('modified');
        expect(await updatePage.stringMinlengthTomInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMaxlengthTomInput.clear();
        await updatePage.stringMaxlengthTomInput.sendKeys('modified');
        expect(await updatePage.stringMaxlengthTomInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringPatternTomInput.clear();
        await updatePage.stringPatternTomInput.sendKeys('modified');
        expect(await updatePage.stringPatternTomInput.getAttribute('value')).to.match(/modified/);

        await clear(updatePage.integerTomInput);
        await updatePage.integerTomInput.sendKeys('6');
        expect(await updatePage.integerTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerRequiredTomInput);
        await updatePage.integerRequiredTomInput.sendKeys('6');
        expect(await updatePage.integerRequiredTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMinTomInput);
        await updatePage.integerMinTomInput.sendKeys('6');
        expect(await updatePage.integerMinTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMaxTomInput);
        await updatePage.integerMaxTomInput.sendKeys('6');
        expect(await updatePage.integerMaxTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longTomInput);
        await updatePage.longTomInput.sendKeys('6');
        expect(await updatePage.longTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longRequiredTomInput);
        await updatePage.longRequiredTomInput.sendKeys('6');
        expect(await updatePage.longRequiredTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMinTomInput);
        await updatePage.longMinTomInput.sendKeys('6');
        expect(await updatePage.longMinTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMaxTomInput);
        await updatePage.longMaxTomInput.sendKeys('6');
        expect(await updatePage.longMaxTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatTomInput);
        await updatePage.floatTomInput.sendKeys('6');
        expect(await updatePage.floatTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatRequiredTomInput);
        await updatePage.floatRequiredTomInput.sendKeys('6');
        expect(await updatePage.floatRequiredTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMinTomInput);
        await updatePage.floatMinTomInput.sendKeys('6');
        expect(await updatePage.floatMinTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMaxTomInput);
        await updatePage.floatMaxTomInput.sendKeys('6');
        expect(await updatePage.floatMaxTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleRequiredTomInput);
        await updatePage.doubleRequiredTomInput.sendKeys('6');
        expect(await updatePage.doubleRequiredTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMinTomInput);
        await updatePage.doubleMinTomInput.sendKeys('6');
        expect(await updatePage.doubleMinTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMaxTomInput);
        await updatePage.doubleMaxTomInput.sendKeys('6');
        expect(await updatePage.doubleMaxTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalRequiredTomInput);
        await updatePage.bigDecimalRequiredTomInput.sendKeys('6');
        expect(await updatePage.bigDecimalRequiredTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMinTomInput);
        await updatePage.bigDecimalMinTomInput.sendKeys('6');
        expect(await updatePage.bigDecimalMinTomInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMaxTomInput);
        await updatePage.bigDecimalMaxTomInput.sendKeys('6');
        expect(await updatePage.bigDecimalMaxTomInput.getAttribute('value')).to.eq('6');

        await updatePage.localDateTomInput.clear();
        await updatePage.localDateTomInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateTomInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.localDateRequiredTomInput.clear();
        await updatePage.localDateRequiredTomInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateRequiredTomInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.instantTomInput.clear();
        await updatePage.instantTomInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instantTomInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.instantRequiredTomInput.clear();
        await updatePage.instantRequiredTomInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instantRequiredTomInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeTomInput.clear();
        await updatePage.zonedDateTimeTomInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeTomInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeRequiredTomInput.clear();
        await updatePage.zonedDateTimeRequiredTomInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeRequiredTomInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.durationTomInput.clear();
        await updatePage.durationTomInput.sendKeys('PT14S');
        expect(await updatePage.durationTomInput.getAttribute('value')).to.contain('14');

        await updatePage.durationRequiredTomInput.clear();
        await updatePage.durationRequiredTomInput.sendKeys('PT14S');
        expect(await updatePage.durationRequiredTomInput.getAttribute('value')).to.contain('14');

        const selectedBooleanTom = await updatePage.booleanTomInput.isSelected();
        if (selectedBooleanTom) {
          await updatePage.booleanTomInput.click();
          expect(await updatePage.booleanTomInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanTomInput.click();
          expect(await updatePage.booleanTomInput.isSelected()).to.be.true;
        }

        const selectedBooleanRequiredTom = await updatePage.booleanRequiredTomInput.isSelected();
        if (selectedBooleanRequiredTom) {
          await updatePage.booleanRequiredTomInput.click();
          expect(await updatePage.booleanRequiredTomInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanRequiredTomInput.click();
          expect(await updatePage.booleanRequiredTomInput.isSelected()).to.be.true;
        }

        await updatePage.uuidTomInput.clear();
        await updatePage.uuidTomInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidTomInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.uuidRequiredTomInput.clear();
        await updatePage.uuidRequiredTomInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidRequiredTomInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.byteTextTomInput.clear();
        await updatePage.byteTextTomInput.sendKeys('updatedbyteTextTom');
        expect(await updatePage.byteTextTomInput.getAttribute('value')).to.match(/updatedbyteTextTom/);

        await updatePage.byteTextRequiredTomInput.clear();
        await updatePage.byteTextRequiredTomInput.sendKeys('updatedbyteTextRequiredTom');
        expect(await updatePage.byteTextRequiredTomInput.getAttribute('value')).to.match(/updatedbyteTextRequiredTom/);

        await updatePage.saveButton.click();

        await waitUntilHidden(updatePage.saveButton);

        expect(await isVisible(updatePage.saveButton)).to.be.false;
        expect(await listPage.infoAlert.isDisplayed()).to.be.true;
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });
    });
  });
});
