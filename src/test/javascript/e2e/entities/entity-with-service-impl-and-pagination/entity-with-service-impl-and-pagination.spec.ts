/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithServiceImplAndPaginationComponentsPage, {
  EntityWithServiceImplAndPaginationDeleteDialog
} from './entity-with-service-impl-and-pagination.page-object';
import EntityWithServiceImplAndPaginationUpdatePage from './entity-with-service-impl-and-pagination-update.page-object';
import EntityWithServiceImplAndPaginationDetailsPage from './entity-with-service-impl-and-pagination-details.page-object';

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

const expect = chai.expect;

describe('EntityWithServiceImplAndPagination e2e test', () => {
  let navBarPage: NavBarPage;
  let updatePage: EntityWithServiceImplAndPaginationUpdatePage;
  let detailsPage: EntityWithServiceImplAndPaginationDetailsPage;
  let listPage: EntityWithServiceImplAndPaginationComponentsPage;
  let deleteDialog: EntityWithServiceImplAndPaginationDeleteDialog;
  let beforeRecordsCount = 0;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    await navBarPage.login('admin', 'admin');
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });

  it('should load EntityWithServiceImplAndPaginations', async () => {
    await navBarPage.getEntityPage('entity-with-service-impl-and-pagination');
    listPage = new EntityWithServiceImplAndPaginationComponentsPage();

    await waitUntilAllDisplayed([listPage.title, listPage.footer]);

    expect(await listPage.title.getText()).not.to.be.empty;
    expect(await listPage.createButton.isEnabled()).to.be.true;

    await waitUntilAnyDisplayed([listPage.noRecords, listPage.table]);
    beforeRecordsCount = (await isVisible(listPage.noRecords)) ? 0 : await getRecordsCount(listPage.table);
  });

  describe('Create flow', () => {
    it('should load create EntityWithServiceImplAndPagination page', async () => {
      await listPage.createButton.click();
      updatePage = new EntityWithServiceImplAndPaginationUpdatePage();

      await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

      expect(await updatePage.title.getAttribute('id')).to.match(/jhipsterApp.entityWithServiceImplAndPagination.home.createOrEditLabel/);
    });

    it('should create and save EntityWithServiceImplAndPaginations', async () => {
      await updatePage.hugoInput.sendKeys('hugo');
      expect(await updatePage.hugoInput.getAttribute('value')).to.match(/hugo/);

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

        deleteDialog = new EntityWithServiceImplAndPaginationDeleteDialog();
        await waitUntilDisplayed(deleteDialog.dialog);

        expect(await deleteDialog.title.getAttribute('id')).to.match(/jhipsterApp.entityWithServiceImplAndPagination.delete.question/);

        await click(deleteDialog.confirmButton);
        await waitUntilHidden(deleteDialog.dialog);

        expect(await isVisible(deleteDialog.dialog)).to.be.false;
        expect(await listPage.dangerAlert.isDisplayed()).to.be.true;

        await waitUntilCount(listPage.records, beforeRecordsCount);
        expect(await listPage.records.count()).to.eq(beforeRecordsCount);
      });

      it('should load details EntityWithServiceImplAndPagination page and fetch data', async () => {
        const detailsButton = listPage.getDetailsButton(listPage.records.first());
        await click(detailsButton);

        detailsPage = new EntityWithServiceImplAndPaginationDetailsPage();

        await waitUntilAllDisplayed([detailsPage.title, detailsPage.backButton, detailsPage.firstDetail]);

        expect(await detailsPage.title.getText()).not.to.be.empty;
        expect(await detailsPage.firstDetail.getText()).not.to.be.empty;

        await click(detailsPage.backButton);
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });

      it('should load edit EntityWithServiceImplAndPagination page, fetch data and update', async () => {
        const editButton = listPage.getEditButton(listPage.records.first());
        await click(editButton);

        await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

        expect(await updatePage.title.getText()).not.to.be.empty;

        await updatePage.hugoInput.clear();
        await updatePage.hugoInput.sendKeys('modified');
        expect(await updatePage.hugoInput.getAttribute('value')).to.match(/modified/);

        await updatePage.saveButton.click();

        await waitUntilHidden(updatePage.saveButton);

        expect(await isVisible(updatePage.saveButton)).to.be.false;
        expect(await listPage.infoAlert.isDisplayed()).to.be.true;
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });
    });
  });
});
