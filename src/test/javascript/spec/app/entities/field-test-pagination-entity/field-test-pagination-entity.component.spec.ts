/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import FieldTestPaginationEntityComponent from '@/entities/field-test-pagination-entity/field-test-pagination-entity.vue';
import FieldTestPaginationEntityClass from '@/entities/field-test-pagination-entity/field-test-pagination-entity.component';
import FieldTestPaginationEntityService from '@/entities/field-test-pagination-entity/field-test-pagination-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('b-alert', {});
localVue.component('b-badge', {});
localVue.directive('b-modal', {});
localVue.component('b-button', {});
localVue.component('router-link', {});

const bModalStub = {
  render: () => {},
  methods: {
    hide: () => {}
  }
};

describe('Component Tests', () => {
  describe('FieldTestPaginationEntity Management Component', () => {
    let wrapper: Wrapper<FieldTestPaginationEntityClass>;
    let comp: FieldTestPaginationEntityClass;
    let fieldTestPaginationEntityServiceStub: SinonStubbedInstance<FieldTestPaginationEntityService>;

    beforeEach(() => {
      fieldTestPaginationEntityServiceStub = sinon.createStubInstance<FieldTestPaginationEntityService>(FieldTestPaginationEntityService);
      fieldTestPaginationEntityServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<FieldTestPaginationEntityClass>(FieldTestPaginationEntityComponent, {
        store,
        i18n,
        localVue,
        stubs: { jhiItemCount: true, bPagination: true, bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          fieldTestPaginationEntityService: () => fieldTestPaginationEntityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should call load all on init', async () => {
      // GIVEN
      fieldTestPaginationEntityServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllFieldTestPaginationEntitys();
      await comp.$nextTick();

      // THEN
      expect(fieldTestPaginationEntityServiceStub.retrieve.called).toBeTruthy();
      expect(comp.fieldTestPaginationEntities[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', async () => {
      // GIVEN
      fieldTestPaginationEntityServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });
      comp.previousPage = 1;

      // WHEN
      comp.loadPage(2);
      await comp.$nextTick();

      // THEN
      expect(fieldTestPaginationEntityServiceStub.retrieve.called).toBeTruthy();
      expect(comp.fieldTestPaginationEntities[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should not load a page if the page is the same as the previous page', () => {
      // GIVEN
      fieldTestPaginationEntityServiceStub.retrieve.reset();
      comp.previousPage = 1;

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(fieldTestPaginationEntityServiceStub.retrieve.called).toBeFalsy();
    });

    it('should re-initialize the page', async () => {
      // GIVEN
      fieldTestPaginationEntityServiceStub.retrieve.reset();
      fieldTestPaginationEntityServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.loadPage(2);
      await comp.$nextTick();
      comp.clear();
      await comp.$nextTick();

      // THEN
      expect(fieldTestPaginationEntityServiceStub.retrieve.callCount).toEqual(3);
      expect(comp.page).toEqual(1);
      expect(comp.fieldTestPaginationEntities[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should calculate the sort attribute for an id', () => {
      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,desc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // GIVEN
      comp.propOrder = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,desc', 'id']);
    });

    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      fieldTestPaginationEntityServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeFieldTestPaginationEntity();
      await comp.$nextTick();

      // THEN
      expect(fieldTestPaginationEntityServiceStub.delete.called).toBeTruthy();
      expect(fieldTestPaginationEntityServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
