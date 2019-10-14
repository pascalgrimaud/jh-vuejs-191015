/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithServiceImplComponent from '@/entities/entity-with-service-impl/entity-with-service-impl.vue';
import EntityWithServiceImplClass from '@/entities/entity-with-service-impl/entity-with-service-impl.component';
import EntityWithServiceImplService from '@/entities/entity-with-service-impl/entity-with-service-impl.service';

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
  describe('EntityWithServiceImpl Management Component', () => {
    let wrapper: Wrapper<EntityWithServiceImplClass>;
    let comp: EntityWithServiceImplClass;
    let entityWithServiceImplServiceStub: SinonStubbedInstance<EntityWithServiceImplService>;

    beforeEach(() => {
      entityWithServiceImplServiceStub = sinon.createStubInstance<EntityWithServiceImplService>(EntityWithServiceImplService);
      entityWithServiceImplServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<EntityWithServiceImplClass>(EntityWithServiceImplComponent, {
        store,
        i18n,
        localVue,
        stubs: { bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          entityWithServiceImplService: () => entityWithServiceImplServiceStub
        }
      });
      comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should call load all on init', async () => {
      // GIVEN
      entityWithServiceImplServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllEntityWithServiceImpls();
      await comp.$nextTick();

      // THEN
      expect(entityWithServiceImplServiceStub.retrieve.called).toBeTruthy();
      expect(comp.entityWithServiceImpls[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      entityWithServiceImplServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeEntityWithServiceImpl();
      await comp.$nextTick();

      // THEN
      expect(entityWithServiceImplServiceStub.delete.called).toBeTruthy();
      expect(entityWithServiceImplServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
