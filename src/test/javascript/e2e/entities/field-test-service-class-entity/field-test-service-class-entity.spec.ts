/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestServiceClassEntityComponentsPage, {
  FieldTestServiceClassEntityDeleteDialog
} from './field-test-service-class-entity.page-object';
import FieldTestServiceClassEntityUpdatePage from './field-test-service-class-entity-update.page-object';
import FieldTestServiceClassEntityDetailsPage from './field-test-service-class-entity-details.page-object';

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

describe('FieldTestServiceClassEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let updatePage: FieldTestServiceClassEntityUpdatePage;
  let detailsPage: FieldTestServiceClassEntityDetailsPage;
  let listPage: FieldTestServiceClassEntityComponentsPage;
  let deleteDialog: FieldTestServiceClassEntityDeleteDialog;
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

  it('should load FieldTestServiceClassEntities', async () => {
    await navBarPage.getEntityPage('field-test-service-class-entity');
    listPage = new FieldTestServiceClassEntityComponentsPage();

    await waitUntilAllDisplayed([listPage.title, listPage.footer]);

    expect(await listPage.title.getText()).not.to.be.empty;
    expect(await listPage.createButton.isEnabled()).to.be.true;

    await waitUntilAnyDisplayed([listPage.noRecords, listPage.table]);
    beforeRecordsCount = (await isVisible(listPage.noRecords)) ? 0 : await getRecordsCount(listPage.table);
  });

  describe('Create flow', () => {
    it('should load create FieldTestServiceClassEntity page', async () => {
      await listPage.createButton.click();
      updatePage = new FieldTestServiceClassEntityUpdatePage();

      await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

      expect(await updatePage.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestServiceClassEntity.home.createOrEditLabel/);
    });

    it('should create and save FieldTestServiceClassEntities', async () => {
      await updatePage.stringBobInput.sendKeys('stringBob');
      expect(await updatePage.stringBobInput.getAttribute('value')).to.match(/stringBob/);

      await updatePage.stringRequiredBobInput.sendKeys('stringRequiredBob');
      expect(await updatePage.stringRequiredBobInput.getAttribute('value')).to.match(/stringRequiredBob/);

      await updatePage.stringMinlengthBobInput.sendKeys('stringMinlengthBob');
      expect(await updatePage.stringMinlengthBobInput.getAttribute('value')).to.match(/stringMinlengthBob/);

      await updatePage.stringMaxlengthBobInput.sendKeys('stringMaxlengthBob');
      expect(await updatePage.stringMaxlengthBobInput.getAttribute('value')).to.match(/stringMaxlengthBob/);

      await updatePage.stringPatternBobInput.sendKeys('stringPatternBob');
      expect(await updatePage.stringPatternBobInput.getAttribute('value')).to.match(/stringPatternBob/);

      await updatePage.integerBobInput.sendKeys('5');
      expect(await updatePage.integerBobInput.getAttribute('value')).to.eq('5');

      await updatePage.integerRequiredBobInput.sendKeys('5');
      expect(await updatePage.integerRequiredBobInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMinBobInput.sendKeys('5');
      expect(await updatePage.integerMinBobInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMaxBobInput.sendKeys('5');
      expect(await updatePage.integerMaxBobInput.getAttribute('value')).to.eq('5');

      await updatePage.longBobInput.sendKeys('5');
      expect(await updatePage.longBobInput.getAttribute('value')).to.eq('5');

      await updatePage.longRequiredBobInput.sendKeys('5');
      expect(await updatePage.longRequiredBobInput.getAttribute('value')).to.eq('5');

      await updatePage.longMinBobInput.sendKeys('5');
      expect(await updatePage.longMinBobInput.getAttribute('value')).to.eq('5');

      await updatePage.longMaxBobInput.sendKeys('5');
      expect(await updatePage.longMaxBobInput.getAttribute('value')).to.eq('5');

      await updatePage.floatBobInput.sendKeys('5');
      expect(await updatePage.floatBobInput.getAttribute('value')).to.eq('5');

      await updatePage.floatRequiredBobInput.sendKeys('5');
      expect(await updatePage.floatRequiredBobInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMinBobInput.sendKeys('5');
      expect(await updatePage.floatMinBobInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMaxBobInput.sendKeys('5');
      expect(await updatePage.floatMaxBobInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleRequiredBobInput.sendKeys('5');
      expect(await updatePage.doubleRequiredBobInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMinBobInput.sendKeys('5');
      expect(await updatePage.doubleMinBobInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMaxBobInput.sendKeys('5');
      expect(await updatePage.doubleMaxBobInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalRequiredBobInput.sendKeys('5');
      expect(await updatePage.bigDecimalRequiredBobInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMinBobInput.sendKeys('5');
      expect(await updatePage.bigDecimalMinBobInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMaxBobInput.sendKeys('5');
      expect(await updatePage.bigDecimalMaxBobInput.getAttribute('value')).to.eq('5');

      await updatePage.localDateBobInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateBobInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.localDateRequiredBobInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateRequiredBobInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.instantBobInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instantBobInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.instanteRequiredBobInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instanteRequiredBobInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeBobInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeBobInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeRequiredBobInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeRequiredBobInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.durationBobInput.sendKeys('PT12S');
      expect(await updatePage.durationBobInput.getAttribute('value')).to.contain('12');

      await updatePage.durationRequiredBobInput.sendKeys('PT12S');
      expect(await updatePage.durationRequiredBobInput.getAttribute('value')).to.contain('12');

      const selectedBooleanBob = await updatePage.booleanBobInput.isSelected();
      if (selectedBooleanBob) {
        await updatePage.booleanBobInput.click();
        expect(await updatePage.booleanBobInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanBobInput.click();
        expect(await updatePage.booleanBobInput.isSelected()).to.be.true;
      }

      const selectedBooleanRequiredBob = await updatePage.booleanRequiredBobInput.isSelected();
      if (selectedBooleanRequiredBob) {
        await updatePage.booleanRequiredBobInput.click();
        expect(await updatePage.booleanRequiredBobInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanRequiredBobInput.click();
        expect(await updatePage.booleanRequiredBobInput.isSelected()).to.be.true;
      }

      await selectLastOption(updatePage.enumBobSelect);

      await selectLastOption(updatePage.enumRequiredBobSelect);

      await updatePage.uuidBobInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidBobInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await updatePage.uuidRequiredBobInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidRequiredBobInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await waitUntilDisplayed(updatePage.byteImageBobInput);
      await updatePage.byteImageBobInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageRequiredBobInput);
      await updatePage.byteImageRequiredBobInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMinbytesBobInput);
      await updatePage.byteImageMinbytesBobInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMaxbytesBobInput);
      await updatePage.byteImageMaxbytesBobInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyBobInput);
      await updatePage.byteAnyBobInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyRequiredBobInput);
      await updatePage.byteAnyRequiredBobInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMinbytesBobInput);
      await updatePage.byteAnyMinbytesBobInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMaxbytesBobInput);
      await updatePage.byteAnyMaxbytesBobInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteTextBobInput);
      await updatePage.byteTextBobInput.sendKeys('byteTextBob');

      expect(await updatePage.byteTextBobInput.getAttribute('value')).to.match(/byteTextBob/);

      await waitUntilDisplayed(updatePage.byteTextRequiredBobInput);
      await updatePage.byteTextRequiredBobInput.sendKeys('byteTextRequiredBob');

      expect(await updatePage.byteTextRequiredBobInput.getAttribute('value')).to.match(/byteTextRequiredBob/);

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

        deleteDialog = new FieldTestServiceClassEntityDeleteDialog();
        await waitUntilDisplayed(deleteDialog.dialog);

        expect(await deleteDialog.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestServiceClassEntity.delete.question/);

        await click(deleteDialog.confirmButton);
        await waitUntilHidden(deleteDialog.dialog);

        expect(await isVisible(deleteDialog.dialog)).to.be.false;
        expect(await listPage.dangerAlert.isDisplayed()).to.be.true;

        await waitUntilCount(listPage.records, beforeRecordsCount);
        expect(await listPage.records.count()).to.eq(beforeRecordsCount);
      });

      it('should load details FieldTestServiceClassEntity page and fetch data', async () => {
        const detailsButton = listPage.getDetailsButton(listPage.records.last());
        await click(detailsButton);

        detailsPage = new FieldTestServiceClassEntityDetailsPage();

        await waitUntilAllDisplayed([detailsPage.title, detailsPage.backButton, detailsPage.firstDetail]);

        expect(await detailsPage.title.getText()).not.to.be.empty;
        expect(await detailsPage.firstDetail.getText()).not.to.be.empty;

        await click(detailsPage.backButton);
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });

      it('should load edit FieldTestServiceClassEntity page, fetch data and update', async () => {
        const editButton = listPage.getEditButton(listPage.records.last());
        await click(editButton);

        await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

        expect(await updatePage.title.getText()).not.to.be.empty;

        await updatePage.stringBobInput.clear();
        await updatePage.stringBobInput.sendKeys('modified');
        expect(await updatePage.stringBobInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringRequiredBobInput.clear();
        await updatePage.stringRequiredBobInput.sendKeys('modified');
        expect(await updatePage.stringRequiredBobInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMinlengthBobInput.clear();
        await updatePage.stringMinlengthBobInput.sendKeys('modified');
        expect(await updatePage.stringMinlengthBobInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMaxlengthBobInput.clear();
        await updatePage.stringMaxlengthBobInput.sendKeys('modified');
        expect(await updatePage.stringMaxlengthBobInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringPatternBobInput.clear();
        await updatePage.stringPatternBobInput.sendKeys('modified');
        expect(await updatePage.stringPatternBobInput.getAttribute('value')).to.match(/modified/);

        await clear(updatePage.integerBobInput);
        await updatePage.integerBobInput.sendKeys('6');
        expect(await updatePage.integerBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerRequiredBobInput);
        await updatePage.integerRequiredBobInput.sendKeys('6');
        expect(await updatePage.integerRequiredBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMinBobInput);
        await updatePage.integerMinBobInput.sendKeys('6');
        expect(await updatePage.integerMinBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMaxBobInput);
        await updatePage.integerMaxBobInput.sendKeys('6');
        expect(await updatePage.integerMaxBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longBobInput);
        await updatePage.longBobInput.sendKeys('6');
        expect(await updatePage.longBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longRequiredBobInput);
        await updatePage.longRequiredBobInput.sendKeys('6');
        expect(await updatePage.longRequiredBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMinBobInput);
        await updatePage.longMinBobInput.sendKeys('6');
        expect(await updatePage.longMinBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMaxBobInput);
        await updatePage.longMaxBobInput.sendKeys('6');
        expect(await updatePage.longMaxBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatBobInput);
        await updatePage.floatBobInput.sendKeys('6');
        expect(await updatePage.floatBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatRequiredBobInput);
        await updatePage.floatRequiredBobInput.sendKeys('6');
        expect(await updatePage.floatRequiredBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMinBobInput);
        await updatePage.floatMinBobInput.sendKeys('6');
        expect(await updatePage.floatMinBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMaxBobInput);
        await updatePage.floatMaxBobInput.sendKeys('6');
        expect(await updatePage.floatMaxBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleRequiredBobInput);
        await updatePage.doubleRequiredBobInput.sendKeys('6');
        expect(await updatePage.doubleRequiredBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMinBobInput);
        await updatePage.doubleMinBobInput.sendKeys('6');
        expect(await updatePage.doubleMinBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMaxBobInput);
        await updatePage.doubleMaxBobInput.sendKeys('6');
        expect(await updatePage.doubleMaxBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalRequiredBobInput);
        await updatePage.bigDecimalRequiredBobInput.sendKeys('6');
        expect(await updatePage.bigDecimalRequiredBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMinBobInput);
        await updatePage.bigDecimalMinBobInput.sendKeys('6');
        expect(await updatePage.bigDecimalMinBobInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMaxBobInput);
        await updatePage.bigDecimalMaxBobInput.sendKeys('6');
        expect(await updatePage.bigDecimalMaxBobInput.getAttribute('value')).to.eq('6');

        await updatePage.localDateBobInput.clear();
        await updatePage.localDateBobInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateBobInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.localDateRequiredBobInput.clear();
        await updatePage.localDateRequiredBobInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateRequiredBobInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.instantBobInput.clear();
        await updatePage.instantBobInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instantBobInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.instanteRequiredBobInput.clear();
        await updatePage.instanteRequiredBobInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instanteRequiredBobInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeBobInput.clear();
        await updatePage.zonedDateTimeBobInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeBobInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeRequiredBobInput.clear();
        await updatePage.zonedDateTimeRequiredBobInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeRequiredBobInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.durationBobInput.clear();
        await updatePage.durationBobInput.sendKeys('PT14S');
        expect(await updatePage.durationBobInput.getAttribute('value')).to.contain('14');

        await updatePage.durationRequiredBobInput.clear();
        await updatePage.durationRequiredBobInput.sendKeys('PT14S');
        expect(await updatePage.durationRequiredBobInput.getAttribute('value')).to.contain('14');

        const selectedBooleanBob = await updatePage.booleanBobInput.isSelected();
        if (selectedBooleanBob) {
          await updatePage.booleanBobInput.click();
          expect(await updatePage.booleanBobInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanBobInput.click();
          expect(await updatePage.booleanBobInput.isSelected()).to.be.true;
        }

        const selectedBooleanRequiredBob = await updatePage.booleanRequiredBobInput.isSelected();
        if (selectedBooleanRequiredBob) {
          await updatePage.booleanRequiredBobInput.click();
          expect(await updatePage.booleanRequiredBobInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanRequiredBobInput.click();
          expect(await updatePage.booleanRequiredBobInput.isSelected()).to.be.true;
        }

        await updatePage.uuidBobInput.clear();
        await updatePage.uuidBobInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidBobInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.uuidRequiredBobInput.clear();
        await updatePage.uuidRequiredBobInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidRequiredBobInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.byteTextBobInput.clear();
        await updatePage.byteTextBobInput.sendKeys('updatedbyteTextBob');
        expect(await updatePage.byteTextBobInput.getAttribute('value')).to.match(/updatedbyteTextBob/);

        await updatePage.byteTextRequiredBobInput.clear();
        await updatePage.byteTextRequiredBobInput.sendKeys('updatedbyteTextRequiredBob');
        expect(await updatePage.byteTextRequiredBobInput.getAttribute('value')).to.match(/updatedbyteTextRequiredBob/);

        await updatePage.saveButton.click();

        await waitUntilHidden(updatePage.saveButton);

        expect(await isVisible(updatePage.saveButton)).to.be.false;
        expect(await listPage.infoAlert.isDisplayed()).to.be.true;
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });
    });
  });
});
