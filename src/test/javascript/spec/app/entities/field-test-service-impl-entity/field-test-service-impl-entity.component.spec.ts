/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import FieldTestServiceImplEntityComponent from '@/entities/field-test-service-impl-entity/field-test-service-impl-entity.vue';
import FieldTestServiceImplEntityClass from '@/entities/field-test-service-impl-entity/field-test-service-impl-entity.component';
import FieldTestServiceImplEntityService from '@/entities/field-test-service-impl-entity/field-test-service-impl-entity.service';

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
  describe('FieldTestServiceImplEntity Management Component', () => {
    let wrapper: Wrapper<FieldTestServiceImplEntityClass>;
    let comp: FieldTestServiceImplEntityClass;
    let fieldTestServiceImplEntityServiceStub: SinonStubbedInstance<FieldTestServiceImplEntityService>;

    beforeEach(() => {
      fieldTestServiceImplEntityServiceStub = sinon.createStubInstance<FieldTestServiceImplEntityService>(
        FieldTestServiceImplEntityService
      );
      fieldTestServiceImplEntityServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<FieldTestServiceImplEntityClass>(FieldTestServiceImplEntityComponent, {
        store,
        i18n,
        localVue,
        stubs: { bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          fieldTestServiceImplEntityService: () => fieldTestServiceImplEntityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should call load all on init', async () => {
      // GIVEN
      fieldTestServiceImplEntityServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllFieldTestServiceImplEntitys();
      await comp.$nextTick();

      // THEN
      expect(fieldTestServiceImplEntityServiceStub.retrieve.called).toBeTruthy();
      expect(comp.fieldTestServiceImplEntities[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      fieldTestServiceImplEntityServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeFieldTestServiceImplEntity();
      await comp.$nextTick();

      // THEN
      expect(fieldTestServiceImplEntityServiceStub.delete.called).toBeTruthy();
      expect(fieldTestServiceImplEntityServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
