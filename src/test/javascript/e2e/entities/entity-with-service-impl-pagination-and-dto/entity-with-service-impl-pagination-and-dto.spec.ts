/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithServiceImplPaginationAndDTOComponentsPage, {
  EntityWithServiceImplPaginationAndDTODeleteDialog
} from './entity-with-service-impl-pagination-and-dto.page-object';
import EntityWithServiceImplPaginationAndDTOUpdatePage from './entity-with-service-impl-pagination-and-dto-update.page-object';
import EntityWithServiceImplPaginationAndDTODetailsPage from './entity-with-service-impl-pagination-and-dto-details.page-object';

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

describe('EntityWithServiceImplPaginationAndDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let updatePage: EntityWithServiceImplPaginationAndDTOUpdatePage;
  let detailsPage: EntityWithServiceImplPaginationAndDTODetailsPage;
  let listPage: EntityWithServiceImplPaginationAndDTOComponentsPage;
  let deleteDialog: EntityWithServiceImplPaginationAndDTODeleteDialog;
  let beforeRecordsCount = 0;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    await navBarPage.login('admin', 'admin');
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });

  it('should load EntityWithServiceImplPaginationAndDTOS', async () => {
    await navBarPage.getEntityPage('entity-with-service-impl-pagination-and-dto');
    listPage = new EntityWithServiceImplPaginationAndDTOComponentsPage();

    await waitUntilAllDisplayed([listPage.title, listPage.footer]);

    expect(await listPage.title.getText()).not.to.be.empty;
    expect(await listPage.createButton.isEnabled()).to.be.true;

    await waitUntilAnyDisplayed([listPage.noRecords, listPage.table]);
    beforeRecordsCount = (await isVisible(listPage.noRecords)) ? 0 : await getRecordsCount(listPage.table);
  });

  describe('Create flow', () => {
    it('should load create EntityWithServiceImplPaginationAndDTO page', async () => {
      await listPage.createButton.click();
      updatePage = new EntityWithServiceImplPaginationAndDTOUpdatePage();

      await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

      expect(await updatePage.title.getAttribute('id')).to.match(
        /jhipsterApp.entityWithServiceImplPaginationAndDTO.home.createOrEditLabel/
      );
    });

    it('should create and save EntityWithServiceImplPaginationAndDTOS', async () => {
      await updatePage.theoInput.sendKeys('theo');
      expect(await updatePage.theoInput.getAttribute('value')).to.match(/theo/);

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

        deleteDialog = new EntityWithServiceImplPaginationAndDTODeleteDialog();
        await waitUntilDisplayed(deleteDialog.dialog);

        expect(await deleteDialog.title.getAttribute('id')).to.match(/jhipsterApp.entityWithServiceImplPaginationAndDTO.delete.question/);

        await click(deleteDialog.confirmButton);
        await waitUntilHidden(deleteDialog.dialog);

        expect(await isVisible(deleteDialog.dialog)).to.be.false;
        expect(await listPage.dangerAlert.isDisplayed()).to.be.true;

        await waitUntilCount(listPage.records, beforeRecordsCount);
        expect(await listPage.records.count()).to.eq(beforeRecordsCount);
      });

      it('should load details EntityWithServiceImplPaginationAndDTO page and fetch data', async () => {
        const detailsButton = listPage.getDetailsButton(listPage.records.first());
        await click(detailsButton);

        detailsPage = new EntityWithServiceImplPaginationAndDTODetailsPage();

        await waitUntilAllDisplayed([detailsPage.title, detailsPage.backButton, detailsPage.firstDetail]);

        expect(await detailsPage.title.getText()).not.to.be.empty;
        expect(await detailsPage.firstDetail.getText()).not.to.be.empty;

        await click(detailsPage.backButton);
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });

      it('should load edit EntityWithServiceImplPaginationAndDTO page, fetch data and update', async () => {
        const editButton = listPage.getEditButton(listPage.records.first());
        await click(editButton);

        await waitUntilAllDisplayed([updatePage.title, updatePage.footer, updatePage.saveButton]);

        expect(await updatePage.title.getText()).not.to.be.empty;

        await updatePage.theoInput.clear();
        await updatePage.theoInput.sendKeys('modified');
        expect(await updatePage.theoInput.getAttribute('value')).to.match(/modified/);

        await updatePage.saveButton.click();

        await waitUntilHidden(updatePage.saveButton);

        expect(await isVisible(updatePage.saveButton)).to.be.false;
        expect(await listPage.infoAlert.isDisplayed()).to.be.true;
        await waitUntilCount(listPage.records, beforeRecordsCount + 1);
      });
    });
  });
});
