/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithServiceClassAndDTOComponent from '@/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto.vue';
import EntityWithServiceClassAndDTOClass from '@/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto.component';
import EntityWithServiceClassAndDTOService from '@/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto.service';

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
  describe('EntityWithServiceClassAndDTO Management Component', () => {
    let wrapper: Wrapper<EntityWithServiceClassAndDTOClass>;
    let comp: EntityWithServiceClassAndDTOClass;
    let entityWithServiceClassAndDTOServiceStub: SinonStubbedInstance<EntityWithServiceClassAndDTOService>;

    beforeEach(() => {
      entityWithServiceClassAndDTOServiceStub = sinon.createStubInstance<EntityWithServiceClassAndDTOService>(
        EntityWithServiceClassAndDTOService
      );
      entityWithServiceClassAndDTOServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<EntityWithServiceClassAndDTOClass>(EntityWithServiceClassAndDTOComponent, {
        store,
        i18n,
        localVue,
        stubs: { bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          entityWithServiceClassAndDTOService: () => entityWithServiceClassAndDTOServiceStub
        }
      });
      comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should call load all on init', async () => {
      // GIVEN
      entityWithServiceClassAndDTOServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllEntityWithServiceClassAndDTOs();
      await comp.$nextTick();

      // THEN
      expect(entityWithServiceClassAndDTOServiceStub.retrieve.called).toBeTruthy();
      expect(comp.entityWithServiceClassAndDTOS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      entityWithServiceClassAndDTOServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeEntityWithServiceClassAndDTO();
      await comp.$nextTick();

      // THEN
      expect(entityWithServiceClassAndDTOServiceStub.delete.called).toBeTruthy();
      expect(entityWithServiceClassAndDTOServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
