/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import EntityWithServiceClassPaginationAndDTODetailComponent from '@/entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto-details.vue';
import EntityWithServiceClassPaginationAndDTOClass from '@/entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto-details.component';
import EntityWithServiceClassPaginationAndDTOService from '@/entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('EntityWithServiceClassPaginationAndDTO Management Detail Component', () => {
    let wrapper: Wrapper<EntityWithServiceClassPaginationAndDTOClass>;
    let comp: EntityWithServiceClassPaginationAndDTOClass;
    let entityWithServiceClassPaginationAndDTOServiceStub: SinonStubbedInstance<EntityWithServiceClassPaginationAndDTOService>;

    beforeEach(() => {
      entityWithServiceClassPaginationAndDTOServiceStub = sinon.createStubInstance<EntityWithServiceClassPaginationAndDTOService>(
        EntityWithServiceClassPaginationAndDTOService
      );

      wrapper = shallowMount<EntityWithServiceClassPaginationAndDTOClass>(EntityWithServiceClassPaginationAndDTODetailComponent, {
        store,
        i18n,
        localVue,
        provide: { entityWithServiceClassPaginationAndDTOService: () => entityWithServiceClassPaginationAndDTOServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundEntityWithServiceClassPaginationAndDTO = { id: 123 };
        entityWithServiceClassPaginationAndDTOServiceStub.find.resolves(foundEntityWithServiceClassPaginationAndDTO);

        // WHEN
        comp.retrieveEntityWithServiceClassPaginationAndDTO(123);
        await comp.$nextTick();

        // THEN
        expect(comp.entityWithServiceClassPaginationAndDTO).toBe(foundEntityWithServiceClassPaginationAndDTO);
      });
    });
  });
});
