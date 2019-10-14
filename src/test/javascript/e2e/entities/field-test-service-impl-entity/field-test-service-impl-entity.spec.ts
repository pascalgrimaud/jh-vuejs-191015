/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestServiceImplEntityComponentsPage, {
  FieldTestServiceImplEntityDeleteDialog
} from './field-test-service-impl-entity.page-object';
import FieldTestServiceImplEntityUpdatePage from './field-test-service-impl-entity-update.page-object';
import FieldTestServiceImplEntityDetailsPage from './field-test-service-impl-entity-details.page-object';

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

describe('FieldTestServiceImplEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let updatePage: FieldTestServiceImplEntityUpdatePage;
  let detailsPage: FieldTestServiceImplEntityDetailsPage;
  let listPage: FieldTestServiceImplEntityComponentsPage;
  let deleteDialog: FieldTestServiceImplEntityDeleteDialog;
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

  it('should load FieldTestServiceImplEntities', async () => {
    await navBarPage.getEntityPage('field-test-service-impl-entity');
    listPage = new FieldTestServiceImplEntityComponentsPage();

    await waitUntilAllDisplayed([listPage.title, listPage.footer]);

    expect(await listPage.title.getText()).not.to.be.empty;
    expect(await listPage.createButton.isEnabled()).to.be.true;

    await waitUntilAnyDisplayed([listPage.noRecords, listPage.table]);
    beforeRecordsCount = (await isVisible(listPage.noRecords)) ? 0 : await getRecordsCount(listPage.table);
  });

  describe('Create flow', () => {
    it('should load create FieldTestServiceImplEntity page', async () => {
      await listPage.createButton.click();
      updatePage = new FieldTestServiceImplEntityUpdatePage();

      await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

      expect(await updatePage.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestServiceImplEntity.home.createOrEditLabel/);
    });

    it('should create and save FieldTestServiceImplEntities', async () => {
      await updatePage.stringMikaInput.sendKeys('stringMika');
      expect(await updatePage.stringMikaInput.getAttribute('value')).to.match(/stringMika/);

      await updatePage.stringRequiredMikaInput.sendKeys('stringRequiredMika');
      expect(await updatePage.stringRequiredMikaInput.getAttribute('value')).to.match(/stringRequiredMika/);

      await updatePage.stringMinlengthMikaInput.sendKeys('stringMinlengthMika');
      expect(await updatePage.stringMinlengthMikaInput.getAttribute('value')).to.match(/stringMinlengthMika/);

      await updatePage.stringMaxlengthMikaInput.sendKeys('stringMaxlengthMika');
      expect(await updatePage.stringMaxlengthMikaInput.getAttribute('value')).to.match(/stringMaxlengthMika/);

      await updatePage.stringPatternMikaInput.sendKeys('stringPatternMika');
      expect(await updatePage.stringPatternMikaInput.getAttribute('value')).to.match(/stringPatternMika/);

      await updatePage.integerMikaInput.sendKeys('5');
      expect(await updatePage.integerMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.integerRequiredMikaInput.sendKeys('5');
      expect(await updatePage.integerRequiredMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMinMikaInput.sendKeys('5');
      expect(await updatePage.integerMinMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMaxMikaInput.sendKeys('5');
      expect(await updatePage.integerMaxMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.longMikaInput.sendKeys('5');
      expect(await updatePage.longMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.longRequiredMikaInput.sendKeys('5');
      expect(await updatePage.longRequiredMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.longMinMikaInput.sendKeys('5');
      expect(await updatePage.longMinMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.longMaxMikaInput.sendKeys('5');
      expect(await updatePage.longMaxMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMikaInput.sendKeys('5');
      expect(await updatePage.floatMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.floatRequiredMikaInput.sendKeys('5');
      expect(await updatePage.floatRequiredMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMinMikaInput.sendKeys('5');
      expect(await updatePage.floatMinMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMaxMikaInput.sendKeys('5');
      expect(await updatePage.floatMaxMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleRequiredMikaInput.sendKeys('5');
      expect(await updatePage.doubleRequiredMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMinMikaInput.sendKeys('5');
      expect(await updatePage.doubleMinMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMaxMikaInput.sendKeys('5');
      expect(await updatePage.doubleMaxMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalRequiredMikaInput.sendKeys('5');
      expect(await updatePage.bigDecimalRequiredMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMinMikaInput.sendKeys('5');
      expect(await updatePage.bigDecimalMinMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMaxMikaInput.sendKeys('5');
      expect(await updatePage.bigDecimalMaxMikaInput.getAttribute('value')).to.eq('5');

      await updatePage.localDateMikaInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateMikaInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.localDateRequiredMikaInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateRequiredMikaInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.instantMikaInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instantMikaInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.instanteRequiredMikaInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instanteRequiredMikaInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeMikaInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeMikaInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeRequiredMikaInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeRequiredMikaInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.durationMikaInput.sendKeys('PT12S');
      expect(await updatePage.durationMikaInput.getAttribute('value')).to.contain('12');

      await updatePage.durationRequiredMikaInput.sendKeys('PT12S');
      expect(await updatePage.durationRequiredMikaInput.getAttribute('value')).to.contain('12');

      const selectedBooleanMika = await updatePage.booleanMikaInput.isSelected();
      if (selectedBooleanMika) {
        await updatePage.booleanMikaInput.click();
        expect(await updatePage.booleanMikaInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanMikaInput.click();
        expect(await updatePage.booleanMikaInput.isSelected()).to.be.true;
      }

      const selectedBooleanRequiredMika = await updatePage.booleanRequiredMikaInput.isSelected();
      if (selectedBooleanRequiredMika) {
        await updatePage.booleanRequiredMikaInput.click();
        expect(await updatePage.booleanRequiredMikaInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanRequiredMikaInput.click();
        expect(await updatePage.booleanRequiredMikaInput.isSelected()).to.be.true;
      }

      await selectLastOption(updatePage.enumMikaSelect);

      await selectLastOption(updatePage.enumRequiredMikaSelect);

      await updatePage.uuidMikaInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidMikaInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await updatePage.uuidRequiredMikaInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidRequiredMikaInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await waitUntilDisplayed(updatePage.byteImageMikaInput);
      await updatePage.byteImageMikaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageRequiredMikaInput);
      await updatePage.byteImageRequiredMikaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMinbytesMikaInput);
      await updatePage.byteImageMinbytesMikaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMaxbytesMikaInput);
      await updatePage.byteImageMaxbytesMikaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMikaInput);
      await updatePage.byteAnyMikaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyRequiredMikaInput);
      await updatePage.byteAnyRequiredMikaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMinbytesMikaInput);
      await updatePage.byteAnyMinbytesMikaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMaxbytesMikaInput);
      await updatePage.byteAnyMaxbytesMikaInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteTextMikaInput);
      await updatePage.byteTextMikaInput.sendKeys('byteTextMika');

      expect(await updatePage.byteTextMikaInput.getAttribute('value')).to.match(/byteTextMika/);

      await waitUntilDisplayed(updatePage.byteTextRequiredMikaInput);
      await updatePage.byteTextRequiredMikaInput.sendKeys('byteTextRequiredMika');

      expect(await updatePage.byteTextRequiredMikaInput.getAttribute('value')).to.match(/byteTextRequiredMika/);

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

        deleteDialog = new FieldTestServiceImplEntityDeleteDialog();
        await waitUntilDisplayed(deleteDialog.dialog);

        expect(await deleteDialog.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestServiceImplEntity.delete.question/);

        await click(deleteDialog.confirmButton);
        await waitUntilHidden(deleteDialog.dialog);

        expect(await isVisible(deleteDialog.dialog)).to.be.false;
        expect(await listPage.dangerAlert.isDisplayed()).to.be.true;

        await waitUntilCount(listPage.records, beforeRecordsCount);
        expect(await listPage.records.count()).to.eq(beforeRecordsCount);
      });

      it('should load details FieldTestServiceImplEntity page and fetch data', async () => {
        const detailsButton = listPage.getDetailsButton(listPage.records.last());
        await click(detailsButton);

        detailsPage = new FieldTestServiceImplEntityDetailsPage();

        await waitUntilAllDisplayed([detailsPage.title, detailsPage.backButton, detailsPage.firstDetail]);

        expect(await detailsPage.title.getText()).not.to.be.empty;
        expect(await detailsPage.firstDetail.getText()).not.to.be.empty;

        await click(detailsPage.backButton);
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });

      it('should load edit FieldTestServiceImplEntity page, fetch data and update', async () => {
        const editButton = listPage.getEditButton(listPage.records.last());
        await click(editButton);

        await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

        expect(await updatePage.title.getText()).not.to.be.empty;

        await updatePage.stringMikaInput.clear();
        await updatePage.stringMikaInput.sendKeys('modified');
        expect(await updatePage.stringMikaInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringRequiredMikaInput.clear();
        await updatePage.stringRequiredMikaInput.sendKeys('modified');
        expect(await updatePage.stringRequiredMikaInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMinlengthMikaInput.clear();
        await updatePage.stringMinlengthMikaInput.sendKeys('modified');
        expect(await updatePage.stringMinlengthMikaInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMaxlengthMikaInput.clear();
        await updatePage.stringMaxlengthMikaInput.sendKeys('modified');
        expect(await updatePage.stringMaxlengthMikaInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringPatternMikaInput.clear();
        await updatePage.stringPatternMikaInput.sendKeys('modified');
        expect(await updatePage.stringPatternMikaInput.getAttribute('value')).to.match(/modified/);

        await clear(updatePage.integerMikaInput);
        await updatePage.integerMikaInput.sendKeys('6');
        expect(await updatePage.integerMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerRequiredMikaInput);
        await updatePage.integerRequiredMikaInput.sendKeys('6');
        expect(await updatePage.integerRequiredMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMinMikaInput);
        await updatePage.integerMinMikaInput.sendKeys('6');
        expect(await updatePage.integerMinMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMaxMikaInput);
        await updatePage.integerMaxMikaInput.sendKeys('6');
        expect(await updatePage.integerMaxMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMikaInput);
        await updatePage.longMikaInput.sendKeys('6');
        expect(await updatePage.longMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longRequiredMikaInput);
        await updatePage.longRequiredMikaInput.sendKeys('6');
        expect(await updatePage.longRequiredMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMinMikaInput);
        await updatePage.longMinMikaInput.sendKeys('6');
        expect(await updatePage.longMinMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMaxMikaInput);
        await updatePage.longMaxMikaInput.sendKeys('6');
        expect(await updatePage.longMaxMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMikaInput);
        await updatePage.floatMikaInput.sendKeys('6');
        expect(await updatePage.floatMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatRequiredMikaInput);
        await updatePage.floatRequiredMikaInput.sendKeys('6');
        expect(await updatePage.floatRequiredMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMinMikaInput);
        await updatePage.floatMinMikaInput.sendKeys('6');
        expect(await updatePage.floatMinMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMaxMikaInput);
        await updatePage.floatMaxMikaInput.sendKeys('6');
        expect(await updatePage.floatMaxMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleRequiredMikaInput);
        await updatePage.doubleRequiredMikaInput.sendKeys('6');
        expect(await updatePage.doubleRequiredMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMinMikaInput);
        await updatePage.doubleMinMikaInput.sendKeys('6');
        expect(await updatePage.doubleMinMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMaxMikaInput);
        await updatePage.doubleMaxMikaInput.sendKeys('6');
        expect(await updatePage.doubleMaxMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalRequiredMikaInput);
        await updatePage.bigDecimalRequiredMikaInput.sendKeys('6');
        expect(await updatePage.bigDecimalRequiredMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMinMikaInput);
        await updatePage.bigDecimalMinMikaInput.sendKeys('6');
        expect(await updatePage.bigDecimalMinMikaInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMaxMikaInput);
        await updatePage.bigDecimalMaxMikaInput.sendKeys('6');
        expect(await updatePage.bigDecimalMaxMikaInput.getAttribute('value')).to.eq('6');

        await updatePage.localDateMikaInput.clear();
        await updatePage.localDateMikaInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateMikaInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.localDateRequiredMikaInput.clear();
        await updatePage.localDateRequiredMikaInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateRequiredMikaInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.instantMikaInput.clear();
        await updatePage.instantMikaInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instantMikaInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.instanteRequiredMikaInput.clear();
        await updatePage.instanteRequiredMikaInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instanteRequiredMikaInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeMikaInput.clear();
        await updatePage.zonedDateTimeMikaInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeMikaInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeRequiredMikaInput.clear();
        await updatePage.zonedDateTimeRequiredMikaInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeRequiredMikaInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.durationMikaInput.clear();
        await updatePage.durationMikaInput.sendKeys('PT14S');
        expect(await updatePage.durationMikaInput.getAttribute('value')).to.contain('14');

        await updatePage.durationRequiredMikaInput.clear();
        await updatePage.durationRequiredMikaInput.sendKeys('PT14S');
        expect(await updatePage.durationRequiredMikaInput.getAttribute('value')).to.contain('14');

        const selectedBooleanMika = await updatePage.booleanMikaInput.isSelected();
        if (selectedBooleanMika) {
          await updatePage.booleanMikaInput.click();
          expect(await updatePage.booleanMikaInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanMikaInput.click();
          expect(await updatePage.booleanMikaInput.isSelected()).to.be.true;
        }

        const selectedBooleanRequiredMika = await updatePage.booleanRequiredMikaInput.isSelected();
        if (selectedBooleanRequiredMika) {
          await updatePage.booleanRequiredMikaInput.click();
          expect(await updatePage.booleanRequiredMikaInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanRequiredMikaInput.click();
          expect(await updatePage.booleanRequiredMikaInput.isSelected()).to.be.true;
        }

        await updatePage.uuidMikaInput.clear();
        await updatePage.uuidMikaInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidMikaInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.uuidRequiredMikaInput.clear();
        await updatePage.uuidRequiredMikaInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidRequiredMikaInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.byteTextMikaInput.clear();
        await updatePage.byteTextMikaInput.sendKeys('updatedbyteTextMika');
        expect(await updatePage.byteTextMikaInput.getAttribute('value')).to.match(/updatedbyteTextMika/);

        await updatePage.byteTextRequiredMikaInput.clear();
        await updatePage.byteTextRequiredMikaInput.sendKeys('updatedbyteTextRequiredMika');
        expect(await updatePage.byteTextRequiredMikaInput.getAttribute('value')).to.match(/updatedbyteTextRequiredMika/);

        await updatePage.saveButton.click();

        await waitUntilHidden(updatePage.saveButton);

        expect(await isVisible(updatePage.saveButton)).to.be.false;
        expect(await listPage.infoAlert.isDisplayed()).to.be.true;
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });
    });
  });
});
