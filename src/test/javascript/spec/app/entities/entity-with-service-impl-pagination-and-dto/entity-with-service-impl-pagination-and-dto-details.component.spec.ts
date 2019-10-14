/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import EntityWithServiceImplPaginationAndDTODetailComponent from '@/entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto-details.vue';
import EntityWithServiceImplPaginationAndDTOClass from '@/entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto-details.component';
import EntityWithServiceImplPaginationAndDTOService from '@/entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('EntityWithServiceImplPaginationAndDTO Management Detail Component', () => {
    let wrapper: Wrapper<EntityWithServiceImplPaginationAndDTOClass>;
    let comp: EntityWithServiceImplPaginationAndDTOClass;
    let entityWithServiceImplPaginationAndDTOServiceStub: SinonStubbedInstance<EntityWithServiceImplPaginationAndDTOService>;

    beforeEach(() => {
      entityWithServiceImplPaginationAndDTOServiceStub = sinon.createStubInstance<EntityWithServiceImplPaginationAndDTOService>(
        EntityWithServiceImplPaginationAndDTOService
      );

      wrapper = shallowMount<EntityWithServiceImplPaginationAndDTOClass>(EntityWithServiceImplPaginationAndDTODetailComponent, {
        store,
        i18n,
        localVue,
        provide: { entityWithServiceImplPaginationAndDTOService: () => entityWithServiceImplPaginationAndDTOServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundEntityWithServiceImplPaginationAndDTO = { id: 123 };
        entityWithServiceImplPaginationAndDTOServiceStub.find.resolves(foundEntityWithServiceImplPaginationAndDTO);

        // WHEN
        comp.retrieveEntityWithServiceImplPaginationAndDTO(123);
        await comp.$nextTick();

        // THEN
        expect(comp.entityWithServiceImplPaginationAndDTO).toBe(foundEntityWithServiceImplPaginationAndDTO);
      });
    });
  });
});
