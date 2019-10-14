/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import EntityWithServiceClassAndDTODetailComponent from '@/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto-details.vue';
import EntityWithServiceClassAndDTOClass from '@/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto-details.component';
import EntityWithServiceClassAndDTOService from '@/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('EntityWithServiceClassAndDTO Management Detail Component', () => {
    let wrapper: Wrapper<EntityWithServiceClassAndDTOClass>;
    let comp: EntityWithServiceClassAndDTOClass;
    let entityWithServiceClassAndDTOServiceStub: SinonStubbedInstance<EntityWithServiceClassAndDTOService>;

    beforeEach(() => {
      entityWithServiceClassAndDTOServiceStub = sinon.createStubInstance<EntityWithServiceClassAndDTOService>(
        EntityWithServiceClassAndDTOService
      );

      wrapper = shallowMount<EntityWithServiceClassAndDTOClass>(EntityWithServiceClassAndDTODetailComponent, {
        store,
        i18n,
        localVue,
        provide: { entityWithServiceClassAndDTOService: () => entityWithServiceClassAndDTOServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundEntityWithServiceClassAndDTO = { id: 123 };
        entityWithServiceClassAndDTOServiceStub.find.resolves(foundEntityWithServiceClassAndDTO);

        // WHEN
        comp.retrieveEntityWithServiceClassAndDTO(123);
        await comp.$nextTick();

        // THEN
        expect(comp.entityWithServiceClassAndDTO).toBe(foundEntityWithServiceClassAndDTO);
      });
    });
  });
});
