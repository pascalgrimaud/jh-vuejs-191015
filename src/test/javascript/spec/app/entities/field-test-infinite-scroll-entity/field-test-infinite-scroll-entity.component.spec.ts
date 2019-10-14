/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import FieldTestInfiniteScrollEntityComponent from '@/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.vue';
import FieldTestInfiniteScrollEntityClass from '@/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.component';
import FieldTestInfiniteScrollEntityService from '@/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.service';

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
  describe('FieldTestInfiniteScrollEntity Management Component', () => {
    let wrapper: Wrapper<FieldTestInfiniteScrollEntityClass>;
    let comp: FieldTestInfiniteScrollEntityClass;
    let fieldTestInfiniteScrollEntityServiceStub: SinonStubbedInstance<FieldTestInfiniteScrollEntityService>;

    beforeEach(() => {
      fieldTestInfiniteScrollEntityServiceStub = sinon.createStubInstance<FieldTestInfiniteScrollEntityService>(
        FieldTestInfiniteScrollEntityService
      );
      fieldTestInfiniteScrollEntityServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<FieldTestInfiniteScrollEntityClass>(FieldTestInfiniteScrollEntityComponent, {
        store,
        i18n,
        localVue,
        stubs: { jhiItemCount: true, bPagination: true, bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          fieldTestInfiniteScrollEntityService: () => fieldTestInfiniteScrollEntityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should call load all on init', async () => {
      // GIVEN
      fieldTestInfiniteScrollEntityServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllFieldTestInfiniteScrollEntitys();
      await comp.$nextTick();

      // THEN
      expect(fieldTestInfiniteScrollEntityServiceStub.retrieve.called).toBeTruthy();
      expect(comp.fieldTestInfiniteScrollEntities[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', async () => {
      // GIVEN
      fieldTestInfiniteScrollEntityServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });
      comp.previousPage = 1;

      // WHEN
      comp.loadPage(2);
      await comp.$nextTick();

      // THEN
      expect(fieldTestInfiniteScrollEntityServiceStub.retrieve.called).toBeTruthy();
      expect(comp.fieldTestInfiniteScrollEntities[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should re-initialize the page', async () => {
      // GIVEN
      fieldTestInfiniteScrollEntityServiceStub.retrieve.reset();
      fieldTestInfiniteScrollEntityServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.loadPage(2);
      await comp.$nextTick();
      comp.clear();
      await comp.$nextTick();

      // THEN
      expect(fieldTestInfiniteScrollEntityServiceStub.retrieve.callCount).toEqual(2);
      expect(comp.page).toEqual(1);
      expect(comp.fieldTestInfiniteScrollEntities[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should calculate the sort attribute for an id', () => {
      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,asc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // GIVEN
      comp.propOrder = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,asc', 'id']);
    });

    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      fieldTestInfiniteScrollEntityServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeFieldTestInfiniteScrollEntity();
      await comp.$nextTick();

      // THEN
      expect(fieldTestInfiniteScrollEntityServiceStub.delete.called).toBeTruthy();
      expect(fieldTestInfiniteScrollEntityServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
