/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import EntityWithServiceImplAndDTODetailComponent from '@/entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto-details.vue';
import EntityWithServiceImplAndDTOClass from '@/entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto-details.component';
import EntityWithServiceImplAndDTOService from '@/entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('EntityWithServiceImplAndDTO Management Detail Component', () => {
    let wrapper: Wrapper<EntityWithServiceImplAndDTOClass>;
    let comp: EntityWithServiceImplAndDTOClass;
    let entityWithServiceImplAndDTOServiceStub: SinonStubbedInstance<EntityWithServiceImplAndDTOService>;

    beforeEach(() => {
      entityWithServiceImplAndDTOServiceStub = sinon.createStubInstance<EntityWithServiceImplAndDTOService>(
        EntityWithServiceImplAndDTOService
      );

      wrapper = shallowMount<EntityWithServiceImplAndDTOClass>(EntityWithServiceImplAndDTODetailComponent, {
        store,
        i18n,
        localVue,
        provide: { entityWithServiceImplAndDTOService: () => entityWithServiceImplAndDTOServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundEntityWithServiceImplAndDTO = { id: 123 };
        entityWithServiceImplAndDTOServiceStub.find.resolves(foundEntityWithServiceImplAndDTO);

        // WHEN
        comp.retrieveEntityWithServiceImplAndDTO(123);
        await comp.$nextTick();

        // THEN
        expect(comp.entityWithServiceImplAndDTO).toBe(foundEntityWithServiceImplAndDTO);
      });
    });
  });
});
