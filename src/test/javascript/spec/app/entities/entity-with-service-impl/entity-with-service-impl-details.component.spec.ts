/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import EntityWithServiceImplDetailComponent from '@/entities/entity-with-service-impl/entity-with-service-impl-details.vue';
import EntityWithServiceImplClass from '@/entities/entity-with-service-impl/entity-with-service-impl-details.component';
import EntityWithServiceImplService from '@/entities/entity-with-service-impl/entity-with-service-impl.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('EntityWithServiceImpl Management Detail Component', () => {
    let wrapper: Wrapper<EntityWithServiceImplClass>;
    let comp: EntityWithServiceImplClass;
    let entityWithServiceImplServiceStub: SinonStubbedInstance<EntityWithServiceImplService>;

    beforeEach(() => {
      entityWithServiceImplServiceStub = sinon.createStubInstance<EntityWithServiceImplService>(EntityWithServiceImplService);

      wrapper = shallowMount<EntityWithServiceImplClass>(EntityWithServiceImplDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { entityWithServiceImplService: () => entityWithServiceImplServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundEntityWithServiceImpl = { id: 123 };
        entityWithServiceImplServiceStub.find.resolves(foundEntityWithServiceImpl);

        // WHEN
        comp.retrieveEntityWithServiceImpl(123);
        await comp.$nextTick();

        // THEN
        expect(comp.entityWithServiceImpl).toBe(foundEntityWithServiceImpl);
      });
    });
  });
});
