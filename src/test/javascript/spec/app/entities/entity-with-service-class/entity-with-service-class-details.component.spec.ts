/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import EntityWithServiceClassDetailComponent from '@/entities/entity-with-service-class/entity-with-service-class-details.vue';
import EntityWithServiceClassClass from '@/entities/entity-with-service-class/entity-with-service-class-details.component';
import EntityWithServiceClassService from '@/entities/entity-with-service-class/entity-with-service-class.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('EntityWithServiceClass Management Detail Component', () => {
    let wrapper: Wrapper<EntityWithServiceClassClass>;
    let comp: EntityWithServiceClassClass;
    let entityWithServiceClassServiceStub: SinonStubbedInstance<EntityWithServiceClassService>;

    beforeEach(() => {
      entityWithServiceClassServiceStub = sinon.createStubInstance<EntityWithServiceClassService>(EntityWithServiceClassService);

      wrapper = shallowMount<EntityWithServiceClassClass>(EntityWithServiceClassDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { entityWithServiceClassService: () => entityWithServiceClassServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundEntityWithServiceClass = { id: 123 };
        entityWithServiceClassServiceStub.find.resolves(foundEntityWithServiceClass);

        // WHEN
        comp.retrieveEntityWithServiceClass(123);
        await comp.$nextTick();

        // THEN
        expect(comp.entityWithServiceClass).toBe(foundEntityWithServiceClass);
      });
    });
  });
});
