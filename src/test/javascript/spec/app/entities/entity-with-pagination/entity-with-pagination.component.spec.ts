/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithPaginationComponent from '@/entities/entity-with-pagination/entity-with-pagination.vue';
import EntityWithPaginationClass from '@/entities/entity-with-pagination/entity-with-pagination.component';
import EntityWithPaginationService from '@/entities/entity-with-pagination/entity-with-pagination.service';

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
  describe('EntityWithPagination Management Component', () => {
    let wrapper: Wrapper<EntityWithPaginationClass>;
    let comp: EntityWithPaginationClass;
    let entityWithPaginationServiceStub: SinonStubbedInstance<EntityWithPaginationService>;

    beforeEach(() => {
      entityWithPaginationServiceStub = sinon.createStubInstance<EntityWithPaginationService>(EntityWithPaginationService);
      entityWithPaginationServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<EntityWithPaginationClass>(EntityWithPaginationComponent, {
        store,
        i18n,
        localVue,
        stubs: { jhiItemCount: true, bPagination: true, bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          entityWithPaginationService: () => entityWithPaginationServiceStub
        }
      });
      comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should call load all on init', async () => {
      // GIVEN
      entityWithPaginationServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllEntityWithPaginations();
      await comp.$nextTick();

      // THEN
      expect(entityWithPaginationServiceStub.retrieve.called).toBeTruthy();
      expect(comp.entityWithPaginations[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', async () => {
      // GIVEN
      entityWithPaginationServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });
      comp.previousPage = 1;

      // WHEN
      comp.loadPage(2);
      await comp.$nextTick();

      // THEN
      expect(entityWithPaginationServiceStub.retrieve.called).toBeTruthy();
      expect(comp.entityWithPaginations[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should not load a page if the page is the same as the previous page', () => {
      // GIVEN
      entityWithPaginationServiceStub.retrieve.reset();
      comp.previousPage = 1;

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(entityWithPaginationServiceStub.retrieve.called).toBeFalsy();
    });

    it('should re-initialize the page', async () => {
      // GIVEN
      entityWithPaginationServiceStub.retrieve.reset();
      entityWithPaginationServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.loadPage(2);
      await comp.$nextTick();
      comp.clear();
      await comp.$nextTick();

      // THEN
      expect(entityWithPaginationServiceStub.retrieve.callCount).toEqual(3);
      expect(comp.page).toEqual(1);
      expect(comp.entityWithPaginations[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
      entityWithPaginationServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeEntityWithPagination();
      await comp.$nextTick();

      // THEN
      expect(entityWithPaginationServiceStub.delete.called).toBeTruthy();
      expect(entityWithPaginationServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
