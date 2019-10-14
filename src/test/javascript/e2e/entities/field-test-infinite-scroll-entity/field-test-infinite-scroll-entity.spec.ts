/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestInfiniteScrollEntityComponentsPage, {
  FieldTestInfiniteScrollEntityDeleteDialog
} from './field-test-infinite-scroll-entity.page-object';
import FieldTestInfiniteScrollEntityUpdatePage from './field-test-infinite-scroll-entity-update.page-object';
import FieldTestInfiniteScrollEntityDetailsPage from './field-test-infinite-scroll-entity-details.page-object';

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

describe('FieldTestInfiniteScrollEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let updatePage: FieldTestInfiniteScrollEntityUpdatePage;
  let detailsPage: FieldTestInfiniteScrollEntityDetailsPage;
  let listPage: FieldTestInfiniteScrollEntityComponentsPage;
  let deleteDialog: FieldTestInfiniteScrollEntityDeleteDialog;
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

  it('should load FieldTestInfiniteScrollEntities', async () => {
    await navBarPage.getEntityPage('field-test-infinite-scroll-entity');
    listPage = new FieldTestInfiniteScrollEntityComponentsPage();

    await waitUntilAllDisplayed([listPage.title, listPage.footer]);

    expect(await listPage.title.getText()).not.to.be.empty;
    expect(await listPage.createButton.isEnabled()).to.be.true;

    await waitUntilAnyDisplayed([listPage.noRecords, listPage.table]);
    beforeRecordsCount = (await isVisible(listPage.noRecords)) ? 0 : await getRecordsCount(listPage.table);
  });

  describe('Create flow', () => {
    it('should load create FieldTestInfiniteScrollEntity page', async () => {
      await listPage.createButton.click();
      updatePage = new FieldTestInfiniteScrollEntityUpdatePage();

      await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

      expect(await updatePage.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestInfiniteScrollEntity.home.createOrEditLabel/);
    });

    it('should create and save FieldTestInfiniteScrollEntities', async () => {
      await updatePage.stringHugoInput.sendKeys('stringHugo');
      expect(await updatePage.stringHugoInput.getAttribute('value')).to.match(/stringHugo/);

      await updatePage.stringRequiredHugoInput.sendKeys('stringRequiredHugo');
      expect(await updatePage.stringRequiredHugoInput.getAttribute('value')).to.match(/stringRequiredHugo/);

      await updatePage.stringMinlengthHugoInput.sendKeys('stringMinlengthHugo');
      expect(await updatePage.stringMinlengthHugoInput.getAttribute('value')).to.match(/stringMinlengthHugo/);

      await updatePage.stringMaxlengthHugoInput.sendKeys('stringMaxlengthHugo');
      expect(await updatePage.stringMaxlengthHugoInput.getAttribute('value')).to.match(/stringMaxlengthHugo/);

      await updatePage.stringPatternHugoInput.sendKeys('stringPatternHugo');
      expect(await updatePage.stringPatternHugoInput.getAttribute('value')).to.match(/stringPatternHugo/);

      await updatePage.integerHugoInput.sendKeys('5');
      expect(await updatePage.integerHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.integerRequiredHugoInput.sendKeys('5');
      expect(await updatePage.integerRequiredHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMinHugoInput.sendKeys('5');
      expect(await updatePage.integerMinHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.integerMaxHugoInput.sendKeys('5');
      expect(await updatePage.integerMaxHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.longHugoInput.sendKeys('5');
      expect(await updatePage.longHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.longRequiredHugoInput.sendKeys('5');
      expect(await updatePage.longRequiredHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.longMinHugoInput.sendKeys('5');
      expect(await updatePage.longMinHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.longMaxHugoInput.sendKeys('5');
      expect(await updatePage.longMaxHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.floatHugoInput.sendKeys('5');
      expect(await updatePage.floatHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.floatRequiredHugoInput.sendKeys('5');
      expect(await updatePage.floatRequiredHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMinHugoInput.sendKeys('5');
      expect(await updatePage.floatMinHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.floatMaxHugoInput.sendKeys('5');
      expect(await updatePage.floatMaxHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleRequiredHugoInput.sendKeys('5');
      expect(await updatePage.doubleRequiredHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMinHugoInput.sendKeys('5');
      expect(await updatePage.doubleMinHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.doubleMaxHugoInput.sendKeys('5');
      expect(await updatePage.doubleMaxHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalRequiredHugoInput.sendKeys('5');
      expect(await updatePage.bigDecimalRequiredHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMinHugoInput.sendKeys('5');
      expect(await updatePage.bigDecimalMinHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.bigDecimalMaxHugoInput.sendKeys('5');
      expect(await updatePage.bigDecimalMaxHugoInput.getAttribute('value')).to.eq('5');

      await updatePage.localDateHugoInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateHugoInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.localDateRequiredHugoInput.sendKeys('01-01-2001');
      expect(await updatePage.localDateRequiredHugoInput.getAttribute('value')).to.eq('2001-01-01');

      await updatePage.instantHugoInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instantHugoInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.instanteRequiredHugoInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.instanteRequiredHugoInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeHugoInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeHugoInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.zonedDateTimeRequiredHugoInput.sendKeys('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await updatePage.zonedDateTimeRequiredHugoInput.getAttribute('value')).to.contain('2001-01-01T02:30');

      await updatePage.durationHugoInput.sendKeys('PT12S');
      expect(await updatePage.durationHugoInput.getAttribute('value')).to.contain('12');

      await updatePage.durationRequiredHugoInput.sendKeys('PT12S');
      expect(await updatePage.durationRequiredHugoInput.getAttribute('value')).to.contain('12');

      const selectedBooleanHugo = await updatePage.booleanHugoInput.isSelected();
      if (selectedBooleanHugo) {
        await updatePage.booleanHugoInput.click();
        expect(await updatePage.booleanHugoInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanHugoInput.click();
        expect(await updatePage.booleanHugoInput.isSelected()).to.be.true;
      }

      const selectedBooleanRequiredHugo = await updatePage.booleanRequiredHugoInput.isSelected();
      if (selectedBooleanRequiredHugo) {
        await updatePage.booleanRequiredHugoInput.click();
        expect(await updatePage.booleanRequiredHugoInput.isSelected()).to.be.false;
      } else {
        await updatePage.booleanRequiredHugoInput.click();
        expect(await updatePage.booleanRequiredHugoInput.isSelected()).to.be.true;
      }

      await selectLastOption(updatePage.enumHugoSelect);

      await selectLastOption(updatePage.enumRequiredHugoSelect);

      await updatePage.uuidHugoInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidHugoInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await updatePage.uuidRequiredHugoInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await updatePage.uuidRequiredHugoInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);

      await waitUntilDisplayed(updatePage.byteImageHugoInput);
      await updatePage.byteImageHugoInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageRequiredHugoInput);
      await updatePage.byteImageRequiredHugoInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMinbytesHugoInput);
      await updatePage.byteImageMinbytesHugoInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteImageMaxbytesHugoInput);
      await updatePage.byteImageMaxbytesHugoInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyHugoInput);
      await updatePage.byteAnyHugoInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyRequiredHugoInput);
      await updatePage.byteAnyRequiredHugoInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMinbytesHugoInput);
      await updatePage.byteAnyMinbytesHugoInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteAnyMaxbytesHugoInput);
      await updatePage.byteAnyMaxbytesHugoInput.sendKeys(absolutePath);

      await waitUntilDisplayed(updatePage.byteTextHugoInput);
      await updatePage.byteTextHugoInput.sendKeys('byteTextHugo');

      expect(await updatePage.byteTextHugoInput.getAttribute('value')).to.match(/byteTextHugo/);

      await waitUntilDisplayed(updatePage.byteTextRequiredHugoInput);
      await updatePage.byteTextRequiredHugoInput.sendKeys('byteTextRequiredHugo');

      expect(await updatePage.byteTextRequiredHugoInput.getAttribute('value')).to.match(/byteTextRequiredHugo/);

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

        deleteDialog = new FieldTestInfiniteScrollEntityDeleteDialog();
        await waitUntilDisplayed(deleteDialog.dialog);

        expect(await deleteDialog.title.getAttribute('id')).to.match(/jhipsterApp.fieldTestInfiniteScrollEntity.delete.question/);

        await click(deleteDialog.confirmButton);
        await waitUntilHidden(deleteDialog.dialog);

        expect(await isVisible(deleteDialog.dialog)).to.be.false;
        expect(await listPage.dangerAlert.isDisplayed()).to.be.true;

        await waitUntilCount(listPage.records, beforeRecordsCount);
        expect(await listPage.records.count()).to.eq(beforeRecordsCount);
      });

      it('should load details FieldTestInfiniteScrollEntity page and fetch data', async () => {
        const detailsButton = listPage.getDetailsButton(listPage.records.last());
        await click(detailsButton);

        detailsPage = new FieldTestInfiniteScrollEntityDetailsPage();

        await waitUntilAllDisplayed([detailsPage.title, detailsPage.backButton, detailsPage.firstDetail]);

        expect(await detailsPage.title.getText()).not.to.be.empty;
        expect(await detailsPage.firstDetail.getText()).not.to.be.empty;

        await click(detailsPage.backButton);
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });

      it('should load edit FieldTestInfiniteScrollEntity page, fetch data and update', async () => {
        const editButton = listPage.getEditButton(listPage.records.last());
        await click(editButton);

        await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

        expect(await updatePage.title.getText()).not.to.be.empty;

        await updatePage.stringHugoInput.clear();
        await updatePage.stringHugoInput.sendKeys('modified');
        expect(await updatePage.stringHugoInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringRequiredHugoInput.clear();
        await updatePage.stringRequiredHugoInput.sendKeys('modified');
        expect(await updatePage.stringRequiredHugoInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMinlengthHugoInput.clear();
        await updatePage.stringMinlengthHugoInput.sendKeys('modified');
        expect(await updatePage.stringMinlengthHugoInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringMaxlengthHugoInput.clear();
        await updatePage.stringMaxlengthHugoInput.sendKeys('modified');
        expect(await updatePage.stringMaxlengthHugoInput.getAttribute('value')).to.match(/modified/);

        await updatePage.stringPatternHugoInput.clear();
        await updatePage.stringPatternHugoInput.sendKeys('modified');
        expect(await updatePage.stringPatternHugoInput.getAttribute('value')).to.match(/modified/);

        await clear(updatePage.integerHugoInput);
        await updatePage.integerHugoInput.sendKeys('6');
        expect(await updatePage.integerHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerRequiredHugoInput);
        await updatePage.integerRequiredHugoInput.sendKeys('6');
        expect(await updatePage.integerRequiredHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMinHugoInput);
        await updatePage.integerMinHugoInput.sendKeys('6');
        expect(await updatePage.integerMinHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.integerMaxHugoInput);
        await updatePage.integerMaxHugoInput.sendKeys('6');
        expect(await updatePage.integerMaxHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longHugoInput);
        await updatePage.longHugoInput.sendKeys('6');
        expect(await updatePage.longHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longRequiredHugoInput);
        await updatePage.longRequiredHugoInput.sendKeys('6');
        expect(await updatePage.longRequiredHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMinHugoInput);
        await updatePage.longMinHugoInput.sendKeys('6');
        expect(await updatePage.longMinHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.longMaxHugoInput);
        await updatePage.longMaxHugoInput.sendKeys('6');
        expect(await updatePage.longMaxHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatHugoInput);
        await updatePage.floatHugoInput.sendKeys('6');
        expect(await updatePage.floatHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatRequiredHugoInput);
        await updatePage.floatRequiredHugoInput.sendKeys('6');
        expect(await updatePage.floatRequiredHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMinHugoInput);
        await updatePage.floatMinHugoInput.sendKeys('6');
        expect(await updatePage.floatMinHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.floatMaxHugoInput);
        await updatePage.floatMaxHugoInput.sendKeys('6');
        expect(await updatePage.floatMaxHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleRequiredHugoInput);
        await updatePage.doubleRequiredHugoInput.sendKeys('6');
        expect(await updatePage.doubleRequiredHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMinHugoInput);
        await updatePage.doubleMinHugoInput.sendKeys('6');
        expect(await updatePage.doubleMinHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.doubleMaxHugoInput);
        await updatePage.doubleMaxHugoInput.sendKeys('6');
        expect(await updatePage.doubleMaxHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalRequiredHugoInput);
        await updatePage.bigDecimalRequiredHugoInput.sendKeys('6');
        expect(await updatePage.bigDecimalRequiredHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMinHugoInput);
        await updatePage.bigDecimalMinHugoInput.sendKeys('6');
        expect(await updatePage.bigDecimalMinHugoInput.getAttribute('value')).to.eq('6');

        await clear(updatePage.bigDecimalMaxHugoInput);
        await updatePage.bigDecimalMaxHugoInput.sendKeys('6');
        expect(await updatePage.bigDecimalMaxHugoInput.getAttribute('value')).to.eq('6');

        await updatePage.localDateHugoInput.clear();
        await updatePage.localDateHugoInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateHugoInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.localDateRequiredHugoInput.clear();
        await updatePage.localDateRequiredHugoInput.sendKeys('01-01-2019');
        expect(await updatePage.localDateRequiredHugoInput.getAttribute('value')).to.eq('2019-01-01');

        await updatePage.instantHugoInput.clear();
        await updatePage.instantHugoInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instantHugoInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.instanteRequiredHugoInput.clear();
        await updatePage.instanteRequiredHugoInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.instanteRequiredHugoInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeHugoInput.clear();
        await updatePage.zonedDateTimeHugoInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeHugoInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.zonedDateTimeRequiredHugoInput.clear();
        await updatePage.zonedDateTimeRequiredHugoInput.sendKeys('01/01/2019' + protractor.Key.TAB + '02:30AM');
        expect(await updatePage.zonedDateTimeRequiredHugoInput.getAttribute('value')).to.contain('2019-01-01T02:30');

        await updatePage.durationHugoInput.clear();
        await updatePage.durationHugoInput.sendKeys('PT14S');
        expect(await updatePage.durationHugoInput.getAttribute('value')).to.contain('14');

        await updatePage.durationRequiredHugoInput.clear();
        await updatePage.durationRequiredHugoInput.sendKeys('PT14S');
        expect(await updatePage.durationRequiredHugoInput.getAttribute('value')).to.contain('14');

        const selectedBooleanHugo = await updatePage.booleanHugoInput.isSelected();
        if (selectedBooleanHugo) {
          await updatePage.booleanHugoInput.click();
          expect(await updatePage.booleanHugoInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanHugoInput.click();
          expect(await updatePage.booleanHugoInput.isSelected()).to.be.true;
        }

        const selectedBooleanRequiredHugo = await updatePage.booleanRequiredHugoInput.isSelected();
        if (selectedBooleanRequiredHugo) {
          await updatePage.booleanRequiredHugoInput.click();
          expect(await updatePage.booleanRequiredHugoInput.isSelected()).to.be.false;
        } else {
          await updatePage.booleanRequiredHugoInput.click();
          expect(await updatePage.booleanRequiredHugoInput.isSelected()).to.be.true;
        }

        await updatePage.uuidHugoInput.clear();
        await updatePage.uuidHugoInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidHugoInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.uuidRequiredHugoInput.clear();
        await updatePage.uuidRequiredHugoInput.sendKeys('64c99148-3908-465d-8c4a-e510e3ade978');
        expect(await updatePage.uuidRequiredHugoInput.getAttribute('value')).to.match(/64c99148-3908-465d-8c4a-e510e3ade978/);

        await updatePage.byteTextHugoInput.clear();
        await updatePage.byteTextHugoInput.sendKeys('updatedbyteTextHugo');
        expect(await updatePage.byteTextHugoInput.getAttribute('value')).to.match(/updatedbyteTextHugo/);

        await updatePage.byteTextRequiredHugoInput.clear();
        await updatePage.byteTextRequiredHugoInput.sendKeys('updatedbyteTextRequiredHugo');
        expect(await updatePage.byteTextRequiredHugoInput.getAttribute('value')).to.match(/updatedbyteTextRequiredHugo/);

        await updatePage.saveButton.click();

        await waitUntilHidden(updatePage.saveButton);

        expect(await isVisible(updatePage.saveButton)).to.be.false;
        expect(await listPage.infoAlert.isDisplayed()).to.be.true;
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });
    });
  });
});
