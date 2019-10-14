/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import FieldTestServiceClassEntityComponent from '@/entities/field-test-service-class-entity/field-test-service-class-entity.vue';
import FieldTestServiceClassEntityClass from '@/entities/field-test-service-class-entity/field-test-service-class-entity.component';
import FieldTestServiceClassEntityService from '@/entities/field-test-service-class-entity/field-test-service-class-entity.service';

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
  describe('FieldTestServiceClassEntity Management Component', () => {
    let wrapper: Wrapper<FieldTestServiceClassEntityClass>;
    let comp: FieldTestServiceClassEntityClass;
    let fieldTestServiceClassEntityServiceStub: SinonStubbedInstance<FieldTestServiceClassEntityService>;

    beforeEach(() => {
      fieldTestServiceClassEntityServiceStub = sinon.createStubInstance<FieldTestServiceClassEntityService>(
        FieldTestServiceClassEntityService
      );
      fieldTestServiceClassEntityServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<FieldTestServiceClassEntityClass>(FieldTestServiceClassEntityComponent, {
        store,
        i18n,
        localVue,
        stubs: { bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          fieldTestServiceClassEntityService: () => fieldTestServiceClassEntityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should call load all on init', async () => {
      // GIVEN
      fieldTestServiceClassEntityServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllFieldTestServiceClassEntitys();
      await comp.$nextTick();

      // THEN
      expect(fieldTestServiceClassEntityServiceStub.retrieve.called).toBeTruthy();
      expect(comp.fieldTestServiceClassEntities[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      fieldTestServiceClassEntityServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeFieldTestServiceClassEntity();
      await comp.$nextTick();

      // THEN
      expect(fieldTestServiceClassEntityServiceStub.delete.called).toBeTruthy();
      expect(fieldTestServiceClassEntityServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
