/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithPaginationAndDTOComponent from '@/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto.vue';
import EntityWithPaginationAndDTOClass from '@/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto.component';
import EntityWithPaginationAndDTOService from '@/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto.service';

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
  describe('EntityWithPaginationAndDTO Management Component', () => {
    let wrapper: Wrapper<EntityWithPaginationAndDTOClass>;
    let comp: EntityWithPaginationAndDTOClass;
    let entityWithPaginationAndDTOServiceStub: SinonStubbedInstance<EntityWithPaginationAndDTOService>;

    beforeEach(() => {
      entityWithPaginationAndDTOServiceStub = sinon.createStubInstance<EntityWithPaginationAndDTOService>(
        EntityWithPaginationAndDTOService
      );
      entityWithPaginationAndDTOServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<EntityWithPaginationAndDTOClass>(EntityWithPaginationAndDTOComponent, {
        store,
        i18n,
        localVue,
        stubs: { jhiItemCount: true, bPagination: true, bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          entityWithPaginationAndDTOService: () => entityWithPaginationAndDTOServiceStub
        }
      });
      comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should call load all on init', async () => {
      // GIVEN
      entityWithPaginationAndDTOServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllEntityWithPaginationAndDTOs();
      await comp.$nextTick();

      // THEN
      expect(entityWithPaginationAndDTOServiceStub.retrieve.called).toBeTruthy();
      expect(comp.entityWithPaginationAndDTOS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', async () => {
      // GIVEN
      entityWithPaginationAndDTOServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });
      comp.previousPage = 1;

      // WHEN
      comp.loadPage(2);
      await comp.$nextTick();

      // THEN
      expect(entityWithPaginationAndDTOServiceStub.retrieve.called).toBeTruthy();
      expect(comp.entityWithPaginationAndDTOS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should not load a page if the page is the same as the previous page', () => {
      // GIVEN
      entityWithPaginationAndDTOServiceStub.retrieve.reset();
      comp.previousPage = 1;

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(entityWithPaginationAndDTOServiceStub.retrieve.called).toBeFalsy();
    });

    it('should re-initialize the page', async () => {
      // GIVEN
      entityWithPaginationAndDTOServiceStub.retrieve.reset();
      entityWithPaginationAndDTOServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.loadPage(2);
      await comp.$nextTick();
      comp.clear();
      await comp.$nextTick();

      // THEN
      expect(entityWithPaginationAndDTOServiceStub.retrieve.callCount).toEqual(3);
      expect(comp.page).toEqual(1);
      expect(comp.entityWithPaginationAndDTOS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
      entityWithPaginationAndDTOServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeEntityWithPaginationAndDTO();
      await comp.$nextTick();

      // THEN
      expect(entityWithPaginationAndDTOServiceStub.delete.called).toBeTruthy();
      expect(entityWithPaginationAndDTOServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
