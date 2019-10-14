/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import FieldTestMapstructEntityComponent from '@/entities/field-test-mapstruct-entity/field-test-mapstruct-entity.vue';
import FieldTestMapstructEntityClass from '@/entities/field-test-mapstruct-entity/field-test-mapstruct-entity.component';
import FieldTestMapstructEntityService from '@/entities/field-test-mapstruct-entity/field-test-mapstruct-entity.service';

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
  describe('FieldTestMapstructEntity Management Component', () => {
    let wrapper: Wrapper<FieldTestMapstructEntityClass>;
    let comp: FieldTestMapstructEntityClass;
    let fieldTestMapstructEntityServiceStub: SinonStubbedInstance<FieldTestMapstructEntityService>;

    beforeEach(() => {
      fieldTestMapstructEntityServiceStub = sinon.createStubInstance<FieldTestMapstructEntityService>(FieldTestMapstructEntityService);
      fieldTestMapstructEntityServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<FieldTestMapstructEntityClass>(FieldTestMapstructEntityComponent, {
        store,
        i18n,
        localVue,
        stubs: { bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          fieldTestMapstructEntityService: () => fieldTestMapstructEntityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should call load all on init', async () => {
      // GIVEN
      fieldTestMapstructEntityServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllFieldTestMapstructEntitys();
      await comp.$nextTick();

      // THEN
      expect(fieldTestMapstructEntityServiceStub.retrieve.called).toBeTruthy();
      expect(comp.fieldTestMapstructEntities[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      fieldTestMapstructEntityServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeFieldTestMapstructEntity();
      await comp.$nextTick();

      // THEN
      expect(fieldTestMapstructEntityServiceStub.delete.called).toBeTruthy();
      expect(fieldTestMapstructEntityServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
