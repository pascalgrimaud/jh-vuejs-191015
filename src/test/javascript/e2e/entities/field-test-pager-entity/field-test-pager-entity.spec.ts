/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestPagerEntityComponentsPage, { FieldTestPagerEntityDeleteDialog } from './field-test-pager-entity.page-object';
import FieldTestPagerEntityUpdatePage from './field-test-pager-entity-update.page-object';
import FieldTestPagerEntityDetailsPage from './field-test-pager-entity-details.page-object';

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

describe('FieldTestPagerEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let updatePage: FieldTestPagerEntityUpdatePage;
  let detailsPage: FieldTestPagerEntityDetailsPage;
  let listPage: FieldTestPagerEntityComponentsPage;
  let deleteDialog: FieldTestPagerEntityDeleteDialog;
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

  it('should load FieldTestPagerEntities', async () => {
    await navBarPage.getEntityPage('field-test-pager-entity');
    listPage = new FieldTestPagerEntityComponentsPage();

    await waitUntilAllDisplayed([listPage.title, listPage.footer]);

    expect(await listPage.title.getText()).not.to.be.empty;
    expect(await listPage.createButton.isEnabled()).to.be.true;

    await waitUntilAnyDisplayed([listPage.noRecords, listPage.table]);
    beforeRecordsCount = (await isVisible(listPage.noRecords)) ? 0 : await getRecordsCount(listPage.table);
  });

  describe('Create flow', () => {
    it('should load create FieldTestPagerEntity page', async () => {
      await listPage.createButton.click();
      updatePage = new FieldTestPagerEntityUpdatePage();

      await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

      expect(await updatePage.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestPagerEntity.home.createOrEditLabel/);
    });

    it('should create and save FieldTestPagerEntities', async () => {
      await updatePage.stringJadeInput.sendKeys('stringJade');
      expect(await updatePage.stringJadeInput.getAttribute('value')).to.match(/stringJade/);

      await updatePage.stringRequiredJadeInput.sendKeys('stringRequiredJade');
      expect(await updatePage.stringRequiredJadeInput.getAttribute('value')).to.match(/stringRequiredJade/);

      await updatePage.stringMinlengthJadeInput.sendKeys('stringMinlengthJade');
      expect(await updatePage.stringMinlengthJadeInput.getAttribute('value')).to.match(/stringMinlengthJade/);

      await updatePage.stringMaxlengthJadeInput.sendKeys('stringMaxlengthJade');
      expect(await updatePage.stringMaxlengthJadeInput.getAttribute('value')).to.match(/stringMaxlengthJade/);

      await updatePage.stringPatternJadeInput.sendKeys('stringPatternJade');
      expect(await updatePage.stringPatternJadeInput.getAttribute('value')).to.match(/stringPatternJade/);

      await updatePage.integerJadeInput.sendKeys('5');
      expect(await updatePage.integerJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.integerRequiredJadeInput.sendKeys('5');
      expect(await updatePage.integerRequiredJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMinJadeInput.sendKeys('5');
      expect(await updatePage.integerMinJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMaxJadeInput.sendKeys('5');
      expect(await updatePage.integerMaxJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.longJadeInput.sendKeys('5');
      expect(await updatePage.longJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.longRequiredJadeInput.sendKeys('5');
      expect(await updatePage.longRequiredJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.longMinJadeInput.sendKeys('5');
      expect(await updatePage.longMinJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.longMaxJadeInput.sendKeys('5');
      expect(await updatePage.longMaxJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.floatJadeInput.sendKeys('5');
      expect(await updatePage.floatJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.floatRequiredJadeInput.sendKeys('5');
      expect(await updatePage.floatRequiredJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMinJadeInput.sendKeys('5');
      expect(await updatePage.floatMinJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMaxJadeInput.sendKeys('5');
      expect(await updatePage.floatMaxJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleRequiredJadeInput.sendKeys('5');
      expect(await updatePage.doubleRequiredJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMinJadeInput.sendKeys('5');
      expect(await updatePage.doubleMinJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMaxJadeInput.sendKeys('5');
      expect(await updatePage.doubleMaxJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalRequiredJadeInput.sendKeys('5');
      expect(await updatePage.bigDecimalRequiredJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMinJadeInput.sendKeys('5');
      expect(await updatePage.bigDecimalMinJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMaxJadeInput.sendKeys('5');
      expect(await updatePage.bigDecimalMaxJadeInput.getAttribute('value')).to.eq('5');

      await updatePage.localDateJadeInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateJadeInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.localDateRequiredJadeInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateRequiredJadeInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.instantJadeInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instantJadeInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.instanteRequiredJadeInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instanteRequiredJadeInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeJadeInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeJadeInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeRequiredJadeInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeRequiredJadeInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.durationJadeInput.sendKeys('PT12S');
      expect(await updatePage.durationJadeInput.getAttribute('value')).to.contain('12');

      await updatePage.durationRequiredJadeInput.sendKeys('PT12S');
      expect(await updatePage.durationRequiredJadeInput.getAttribute('value')).to.contain('12');

      const selectedBooleanJade = await updatePage.booleanJadeInput.isSelected();
      if (selectedBooleanJade) {
        await updatePage.booleanJadeInput.click();
        expect(await updatePage.booleanJadeInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanJadeInput.click();
        expect(await updatePage.booleanJadeInput.isSelected()).to.be.true;
      }

      const selectedBooleanRequiredJade = await updatePage.booleanRequiredJadeInput.isSelected();
      if (selectedBooleanRequiredJade) {
        await updatePage.booleanRequiredJadeInput.click();
        expect(await updatePage.booleanRequiredJadeInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanRequiredJadeInput.click();
        expect(await updatePage.booleanRequiredJadeInput.isSelected()).to.be.true;
      }

      await selectLastOption(updatePage.enumJadeSelect);

      await selectLastOption(updatePage.enumRequiredJadeSelect);

      await updatePage.uuidJadeInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidJadeInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await updatePage.uuidRequiredJadeInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidRequiredJadeInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await waitUntilDisplayed(updatePage.byteImageJadeInput);
      await updatePage.byteImageJadeInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageRequiredJadeInput);
      await updatePage.byteImageRequiredJadeInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMinbytesJadeInput);
      await updatePage.byteImageMinbytesJadeInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMaxbytesJadeInput);
      await updatePage.byteImageMaxbytesJadeInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyJadeInput);
      await updatePage.byteAnyJadeInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyRequiredJadeInput);
      await updatePage.byteAnyRequiredJadeInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMinbytesJadeInput);
      await updatePage.byteAnyMinbytesJadeInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMaxbytesJadeInput);
      await updatePage.byteAnyMaxbytesJadeInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteTextJadeInput);
      await updatePage.byteTextJadeInput.sendKeys('byteTextJade');

      expect(await updatePage.byteTextJadeInput.getAttribute('value')).to.match(/byteTextJade/);

      await waitUntilDisplayed(updatePage.byteTextRequiredJadeInput);
      await updatePage.byteTextRequiredJadeInput.sendKeys('byteTextRequiredJade');

      expect(await updatePage.byteTextRequiredJadeInput.getAttribute('value')).to.match(/byteTextRequiredJade/);

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

        deleteDialog = new FieldTestPagerEntityDeleteDialog();
        await waitUntilDisplayed(deleteDialog.dialog);

        expect(await deleteDialog.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestPagerEntity.delete.question/);

        await click(deleteDialog.confirmButton);
        await waitUntilHidden(deleteDialog.dialog);

        expect(await isVisible(deleteDialog.dialog)).to.be.false;
        expect(await listPage.dangerAlert.isDisplayed()).to.be.true;

        await waitUntilCount(listPage.records, beforeRecordsCount);
        expect(await listPage.records.count()).to.eq(beforeRecordsCount);
      });

      it('should load details FieldTestPagerEntity page and fetch data', async () => {
        const detailsButton = listPage.getDetailsButton(listPage.records.first());
        await click(detailsButton);

        detailsPage = new FieldTestPagerEntityDetailsPage();

        await waitUntilAllDisplayed([detailsPage.title, detailsPage.backButton, detailsPage.firstDetail]);

        expect(await detailsPage.title.getText()).not.to.be.empty;
        expect(await detailsPage.firstDetail.getText()).not.to.be.empty;

        await click(detailsPage.backButton);
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });

      it('should load edit FieldTestPagerEntity page, fetch data and update', async () => {
        const editButton = listPage.getEditButton(listPage.records.first());
        await click(editButton);

        await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

        expect(await updatePage.title.getText()).not.to.be.empty;

        await updatePage.stringJadeInput.clear();
        await updatePage.stringJadeInput.sendKeys('modified');
        expect(await updatePage.stringJadeInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringRequiredJadeInput.clear();
        await updatePage.stringRequiredJadeInput.sendKeys('modified');
        expect(await updatePage.stringRequiredJadeInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMinlengthJadeInput.clear();
        await updatePage.stringMinlengthJadeInput.sendKeys('modified');
        expect(await updatePage.stringMinlengthJadeInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMaxlengthJadeInput.clear();
        await updatePage.stringMaxlengthJadeInput.sendKeys('modified');
        expect(await updatePage.stringMaxlengthJadeInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringPatternJadeInput.clear();
        await updatePage.stringPatternJadeInput.sendKeys('modified');
        expect(await updatePage.stringPatternJadeInput.getAttribute('value')).to.match(/modified/);

        await clear(updatePage.integerJadeInput);
        await updatePage.integerJadeInput.sendKeys('6');
        expect(await updatePage.integerJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerRequiredJadeInput);
        await updatePage.integerRequiredJadeInput.sendKeys('6');
        expect(await updatePage.integerRequiredJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMinJadeInput);
        await updatePage.integerMinJadeInput.sendKeys('6');
        expect(await updatePage.integerMinJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMaxJadeInput);
        await updatePage.integerMaxJadeInput.sendKeys('6');
        expect(await updatePage.integerMaxJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longJadeInput);
        await updatePage.longJadeInput.sendKeys('6');
        expect(await updatePage.longJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longRequiredJadeInput);
        await updatePage.longRequiredJadeInput.sendKeys('6');
        expect(await updatePage.longRequiredJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMinJadeInput);
        await updatePage.longMinJadeInput.sendKeys('6');
        expect(await updatePage.longMinJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMaxJadeInput);
        await updatePage.longMaxJadeInput.sendKeys('6');
        expect(await updatePage.longMaxJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatJadeInput);
        await updatePage.floatJadeInput.sendKeys('6');
        expect(await updatePage.floatJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatRequiredJadeInput);
        await updatePage.floatRequiredJadeInput.sendKeys('6');
        expect(await updatePage.floatRequiredJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMinJadeInput);
        await updatePage.floatMinJadeInput.sendKeys('6');
        expect(await updatePage.floatMinJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMaxJadeInput);
        await updatePage.floatMaxJadeInput.sendKeys('6');
        expect(await updatePage.floatMaxJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleRequiredJadeInput);
        await updatePage.doubleRequiredJadeInput.sendKeys('6');
        expect(await updatePage.doubleRequiredJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMinJadeInput);
        await updatePage.doubleMinJadeInput.sendKeys('6');
        expect(await updatePage.doubleMinJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMaxJadeInput);
        await updatePage.doubleMaxJadeInput.sendKeys('6');
        expect(await updatePage.doubleMaxJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalRequiredJadeInput);
        await updatePage.bigDecimalRequiredJadeInput.sendKeys('6');
        expect(await updatePage.bigDecimalRequiredJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMinJadeInput);
        await updatePage.bigDecimalMinJadeInput.sendKeys('6');
        expect(await updatePage.bigDecimalMinJadeInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMaxJadeInput);
        await updatePage.bigDecimalMaxJadeInput.sendKeys('6');
        expect(await updatePage.bigDecimalMaxJadeInput.getAttribute('value')).to.eq('6');

        await updatePage.localDateJadeInput.clear();
        await updatePage.localDateJadeInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateJadeInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.localDateRequiredJadeInput.clear();
        await updatePage.localDateRequiredJadeInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateRequiredJadeInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.instantJadeInput.clear();
        await updatePage.instantJadeInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instantJadeInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.instanteRequiredJadeInput.clear();
        await updatePage.instanteRequiredJadeInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instanteRequiredJadeInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeJadeInput.clear();
        await updatePage.zonedDateTimeJadeInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeJadeInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeRequiredJadeInput.clear();
        await updatePage.zonedDateTimeRequiredJadeInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeRequiredJadeInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.durationJadeInput.clear();
        await updatePage.durationJadeInput.sendKeys('PT14S');
        expect(await updatePage.durationJadeInput.getAttribute('value')).to.contain('14');

        await updatePage.durationRequiredJadeInput.clear();
        await updatePage.durationRequiredJadeInput.sendKeys('PT14S');
        expect(await updatePage.durationRequiredJadeInput.getAttribute('value')).to.contain('14');

        const selectedBooleanJade = await updatePage.booleanJadeInput.isSelected();
        if (selectedBooleanJade) {
          await updatePage.booleanJadeInput.click();
          expect(await updatePage.booleanJadeInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanJadeInput.click();
          expect(await updatePage.booleanJadeInput.isSelected()).to.be.true;
        }

        const selectedBooleanRequiredJade = await updatePage.booleanRequiredJadeInput.isSelected();
        if (selectedBooleanRequiredJade) {
          await updatePage.booleanRequiredJadeInput.click();
          expect(await updatePage.booleanRequiredJadeInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanRequiredJadeInput.click();
          expect(await updatePage.booleanRequiredJadeInput.isSelected()).to.be.true;
        }

        await updatePage.uuidJadeInput.clear();
        await updatePage.uuidJadeInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidJadeInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.uuidRequiredJadeInput.clear();
        await updatePage.uuidRequiredJadeInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidRequiredJadeInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.byteTextJadeInput.clear();
        await updatePage.byteTextJadeInput.sendKeys('updatedbyteTextJade');
        expect(await updatePage.byteTextJadeInput.getAttribute('value')).to.match(/updatedbyteTextJade/);

        await updatePage.byteTextRequiredJadeInput.clear();
        await updatePage.byteTextRequiredJadeInput.sendKeys('updatedbyteTextRequiredJade');
        expect(await updatePage.byteTextRequiredJadeInput.getAttribute('value')).to.match(/updatedbyteTextRequiredJade/);

        await updatePage.saveButton.click();

        await waitUntilHidden(updatePage.saveButton);

        expect(await isVisible(updatePage.saveButton)).to.be.false;
        expect(await listPage.infoAlert.isDisplayed()).to.be.true;
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });
    });
  });
});
